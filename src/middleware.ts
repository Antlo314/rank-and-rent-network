import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. atlantaroofingandsiding.net, localhost:3000)
  let hostname = req.headers.get("host")!;

  // Handle localhost for local testing - default to the roofing domain for local dev
  if (hostname.includes("localhost")) {
    hostname = "atlantaroofingandsiding.net";
  }

  // Rewrite to `app/_sites/[domain]/[path]` dynamic route
  return NextResponse.rewrite(new URL(`/_sites/${hostname}${url.pathname}`, req.url));
}
