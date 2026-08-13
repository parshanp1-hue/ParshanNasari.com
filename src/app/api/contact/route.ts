import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import {
  isJsonContentType,
  isOversized,
  parseContactInput,
  pickContactFields,
  verifyContactToken,
} from "@/lib/contact-guard";
import { clientIp, rateLimit } from "@/lib/rate-limit";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function denied(status = 400) {
  return NextResponse.json({ ok: false }, { status });
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;

  const allowed = new Set([
    siteConfig.url,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);

  if (process.env.VERCEL_URL) {
    allowed.add(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    allowed.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  return allowed.has(origin);
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request.headers.get("origin"))) {
    return denied(403);
  }

  if (!isJsonContentType(request)) {
    return denied(415);
  }

  if (isOversized(request)) {
    return denied(413);
  }

  if (!rateLimit(`contact:${clientIp(request)}`, 5)) {
    return denied(429);
  }

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return denied(503);
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return denied(400);
  }

  const fields = pickContactFields(raw);
  if (!fields) {
    return denied(400);
  }

  // Honeypot — real users never fill this. Same trimmed success as a real send.
  if (fields.botcheck) {
    return NextResponse.json({ ok: true });
  }

  if (!verifyContactToken(fields.token)) {
    return denied(403);
  }

  const parsed = parseContactInput(fields);
  if (!parsed) {
    return denied(400);
  }

  const payload = new FormData();
  payload.append("access_key", accessKey);
  payload.append("name", parsed.name);
  payload.append("email", parsed.email);
  payload.append("message", parsed.message);
  payload.append("subject", `Website inquiry from ${parsed.name}`);
  payload.append("from_name", siteConfig.name);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });
    const result = (await response.json()) as { success?: boolean };

    if (!result.success) {
      return denied(502);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return denied(502);
  }
}
