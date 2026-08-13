import { NextResponse } from "next/server";
import { issueContactToken } from "@/lib/contact-guard";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export async function GET(request: Request) {
  if (!rateLimit(`contact-token:${clientIp(request)}`, 20)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const token = issueContactToken();
  if (!token) {
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  return NextResponse.json({ ok: true, token });
}
