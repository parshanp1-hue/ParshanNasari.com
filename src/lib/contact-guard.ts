import { createHmac, timingSafeEqual } from "node:crypto";

export const MAX_NAME = 120;
export const MAX_EMAIL = 254;
export const MAX_MESSAGE = 5_000;
export const MAX_JSON_BYTES = 20_000;

const TOKEN_MAX_AGE_MS = 4 * 60 * 60 * 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFields = {
  name: unknown;
  email: unknown;
  message: unknown;
  botcheck: unknown;
  token: unknown;
};

function signingSecret(): string | null {
  return process.env.WEB3FORMS_KEY || null;
}

function hmac(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function issueContactToken(): string | null {
  const secret = signingSecret();
  if (!secret) return null;

  const issuedAt = Date.now().toString();
  return `${issuedAt}.${hmac(issuedAt, secret)}`;
}

export function verifyContactToken(token: unknown): boolean {
  if (typeof token !== "string") return false;

  const secret = signingSecret();
  if (!secret) return false;

  const separator = token.indexOf(".");
  if (separator <= 0) return false;

  const issuedAt = token.slice(0, separator);
  const digest = token.slice(separator + 1);
  const expected = hmac(issuedAt, secret);

  const actualBuffer = Buffer.from(digest);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length) return false;
  if (!timingSafeEqual(actualBuffer, expectedBuffer)) return false;

  const timestamp = Number(issuedAt);
  if (!Number.isFinite(timestamp)) return false;

  const age = Date.now() - timestamp;
  return age >= 0 && age <= TOKEN_MAX_AGE_MS;
}

/** Ignore extra client fields so hidden/server values cannot be injected. */
export function pickContactFields(body: unknown): ContactFields | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;

  const record = body as Record<string, unknown>;
  return {
    name: record.name,
    email: record.email,
    message: record.message,
    botcheck: record.botcheck,
    token: record.token,
  };
}

function stripControls(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

function asTrimmedString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = stripControls(value).trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export function parseContactInput(fields: ContactFields): {
  name: string;
  email: string;
  message: string;
} | null {
  const name = asTrimmedString(fields.name, MAX_NAME)?.replace(/[\r\n]+/g, " ");
  const email = asTrimmedString(fields.email, MAX_EMAIL)?.replace(/[\r\n]+/g, "");
  const message = asTrimmedString(fields.message, MAX_MESSAGE);

  if (!name || !email || !message) return null;
  if (!EMAIL_PATTERN.test(email)) return null;

  return { name, email, message };
}

export function isJsonContentType(request: Request): boolean {
  const contentType = request.headers.get("content-type") ?? "";
  return contentType.toLowerCase().startsWith("application/json");
}

export function isOversized(request: Request): boolean {
  const length = Number(request.headers.get("content-length") ?? "0");
  return Number.isFinite(length) && length > MAX_JSON_BYTES;
}
