import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'am'],
  localeDetection: false,

  defaultLocale: 'en'
});

export const config = {
  matcher: [
    '/', '/(am|ru|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};