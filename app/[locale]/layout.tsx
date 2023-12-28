import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const SITE_SUFFIX = ' | Prime Motors';

export const metadata: Metadata = {
  title: 'Prime Motors',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

const locales = ['en', 'ru', 'am'];

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {

  const locale = useLocale();

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
