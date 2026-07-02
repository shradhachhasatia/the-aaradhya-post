export const UNLOCK_COOKIE = "aaradhya_unlocked";

export async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function expectedUnlockToken(): Promise<string> {
  const password = process.env.SITE_PASSWORD ?? "";
  return sha256Hex(password);
}
