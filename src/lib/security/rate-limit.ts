type HeaderBag = {
  get(name: string): string | null;
};

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

declare global {
  var __harborPineRateLimits: Map<string, RateLimitBucket> | undefined;
}

function getRateLimitStore() {
  if (!globalThis.__harborPineRateLimits) {
    globalThis.__harborPineRateLimits = new Map<string, RateLimitBucket>();
  }

  return globalThis.__harborPineRateLimits;
}

function pruneExpiredBuckets(now: number) {
  const store = getRateLimitStore();

  for (const [key, bucket] of store.entries()) {
    if (bucket.resetAt <= now) {
      store.delete(key);
    }
  }
}

export function buildRequestFingerprint(headers: HeaderBag, scope: string) {
  const forwardedFor = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp =
    forwardedFor ||
    headers.get("x-real-ip") ||
    headers.get("cf-connecting-ip") ||
    "unknown-ip";
  const userAgent = headers.get("user-agent")?.slice(0, 160) || "unknown-agent";

  return `${scope}:${realIp}:${userAgent}`;
}

export function consumeRateLimit({
  key,
  limit,
  windowMs,
}: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitResult {
  const now = Date.now();
  const store = getRateLimitStore();

  pruneExpiredBuckets(now);

  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      allowed: true,
      retryAfterSeconds: 0,
    };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  store.set(key, current);

  return {
    allowed: true,
    retryAfterSeconds: 0,
  };
}
