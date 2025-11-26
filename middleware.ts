import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('admin_session')?.value;

  // If accessing login page and already logged in, redirect to dashboard
  if (pathname === '/admin-petit-collo/login' && sessionToken) {
    return NextResponse.redirect(new URL('/admin-petit-collo', request.url));
  }

  // Protect admin routes (except login)
  if (pathname.startsWith('/admin-petit-collo') && pathname !== '/admin-petit-collo/login') {
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/admin-petit-collo/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-petit-collo/:path*'],
};

