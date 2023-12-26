import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Prime Motors',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: any
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
