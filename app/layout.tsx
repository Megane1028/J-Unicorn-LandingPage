import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Footer from "../components/commons/Footer"
import Navbar from "../components/commons/Navbar"
import StyledComponentsRegistry from './registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'J-unicorn | 日本のリーディング投資会社',
    template: '%s | J-unicorn'
  },
  description: 'J-unicornは、革新的な金融ソリューションと投資機会を提供する日本のリーディング投資会社です。',
  keywords: ['投資', '日本', '金融', 'J-unicorn', '投資会社', '投資機会'],
  authors: [{ name: 'J-unicorn' }],
  creator: 'J-unicorn',
  publisher: 'J-unicorn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://j-unicorn.org'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://j-unicorn.org',
    siteName: 'J-unicorn',
    title: 'J-unicorn | 日本のリーディング投資会社',
    description: 'J-unicornは、革新的な金融ソリューションと投資機会を提供する日本のリーディング投資会社です。',
    images: [
      {
        url: '/logo.ico',
        width: 800,
        height: 600,
        alt: 'J-unicorn ロゴ',
      },
    ],
  },
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja-JP">
      <body
        className={`${GeistSans.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}