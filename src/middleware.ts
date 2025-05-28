import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all paths
    '/((?!api|_next|public|favicon.ico).*)',
    // Match root
    '/',
    // Match all supported locales
    '/(ar|en)/:path*'
  ]
};