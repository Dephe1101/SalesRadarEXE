import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Radar Middleware - Standardized Multi-Layer Route Protection
 * Handles: Authentication, Role-based access control, and Workspace isolation.
 */

// 1. Define Route Categories
const PUBLIC_PATHS = ['/', '/login'];
const ADMIN_ROOT = '/admin';
const SALES_PATHS = ['/leads', '/saved', '/outreach', '/tracking', '/settings'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get('radar_session');
  const role = request.cookies.get('radar_role')?.value;

  const isAuth = !!session;
  const isAdminPath = pathname.startsWith(ADMIN_ROOT);
  const isSalesPath = SALES_PATHS.some(path => pathname.startsWith(path));
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  // LOGIC 1: Public Routes Override
  // Always allowed: Homepage, Static Assets (handled by matcher)
  if (pathname === '/') return NextResponse.next();

  // LOGIC 2: Authentication Guard
  if (!isAuth) {
    // If not authenticated and trying to access any non-public route
    if (!isPublicPath) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  // LOGIC 3: Authenticated Handlers
  if (isAuth) {
    // A. Prevent logged-in users from hitting login page
    if (pathname === '/login') {
      const homeBase = role === 'admin' ? '/admin/dashboard' : '/leads';
      return NextResponse.redirect(new URL(homeBase, request.url));
    }

    // B. Strict Role-based Access Control (RBAC)
    
    // Case: Sales User attempting to access Admin workspace
    if (isAdminPath && role !== 'admin') {
      return NextResponse.redirect(new URL('/leads', request.url));
    }

    // Case: Admin attempting to access Sales workspace
    // We strictly enforce Admin workspace for Admins to maintain UI consistency
    if (isSalesPath && role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

/**
 * Matcher configuration follows Next.js best practices:
 * - Excludes API routes (_next/static, _next/image, favicon, etc.)
 * - Protects all major functional route groups
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icons, images (public assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icons|images).*)',
  ],
};
