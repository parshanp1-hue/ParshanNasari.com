const WINDOW_MS = 15 * 60 * 1000;
const MAX_KEYS = 4_000;

type Bucket = { hits: number[]; windowMs: number; max: number };

const buckets = new Map<string, Bucket>();

function prune(hits: number[], now: number, windowMs: number): number[] {
  return hits.filter((timestamp) => now - timestamp < windowMs);
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

/** Best-effort per-isolate limiter. Returns false when the caller should be rejected. */
export function rateLimit(key: string, max: number, windowMs = WINDOW_MS): boolean {
  const now = Date.now();
  const existing = buckets.get(key);
  const hits = prune(existing?.hits ?? [], now, windowMs);

  if (hits.length >= max) {
    buckets.set(key, { hits, windowMs, max });
    return false;
  }

  hits.push(now);

  if (buckets.size > MAX_KEYS) {
    buckets.clear();
  }

  buckets.set(key, { hits, windowMs, max });
  return true;
}
