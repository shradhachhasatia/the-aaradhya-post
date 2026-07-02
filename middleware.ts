import { NextRequest, NextResponse } from "next/server";
import { UNLOCK_COOKIE, expectedUnlockToken } from "./lib/lock";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(UNLOCK_COOKIE)?.value;
  const expected = await expectedUnlockToken();

  if (token && token === expected) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/lock";
  url.search = "";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!lock|api/unlock|_next/static|_next/image|favicon.ico).*)",
  ],
};
