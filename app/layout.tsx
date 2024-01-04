import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const SITE_SUFFIX = ' | Prime Motors';

export const metadata: Metadata = {
  title: 'Prime Motors',
  icons: {
    icon: "/favicon.ico?v=1"
  }
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
