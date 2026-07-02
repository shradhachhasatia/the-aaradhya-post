import { NextRequest, NextResponse } from "next/server";
import { UNLOCK_COOKIE, expectedUnlockToken, sha256Hex } from "../../../lib/lock";

export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  if (typeof password !== "string" || !password) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const [submitted, expected] = await Promise.all([
    sha256Hex(password),
    expectedUnlockToken(),
  ]);

  if (submitted !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(UNLOCK_COOKIE, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return response;
}
