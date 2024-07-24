import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("admin-accessToken");
  if (request.nextUrl.pathname === "/") {
    if (cookie) {
      return NextResponse.redirect(new URL("/qr-scan", request.nextUrl.origin));
    } else {
      return NextResponse.next();
    }
  } else {
    if (!cookie) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
