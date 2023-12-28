import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'am'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(am|ru|en)/:path*']
};