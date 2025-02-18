import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // If accessing login page and already logged in, redirect to client portal
  if (request.nextUrl.pathname === '/login') {
    const token = request.cookies.get('session');
    if (token) {
      return NextResponse.redirect(new URL('/client-portal', request.url));
    }
    return NextResponse.next();
  }

  // Protect client portal routes
  if (request.nextUrl.pathname.startsWith('/client-portal')) {
    const token = request.cookies.get('session');
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/client-portal/:path*']
}; 