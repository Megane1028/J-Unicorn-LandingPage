import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Footer from "../components/commons/Footer"
import Navbar from "../components/commons/Navbar"
import StyledComponentsRegistry from './registry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Squarepoint Capitals | 日本のリーディング投資会社',
    template: '%s | Squarepoint Capitals'
  },
  description: 'Squarepoint Capitalsは、革新的な金融ソリューションと投資機会を提供する日本のリーディング投資会社です。',
  keywords: ['投資', '日本', '金融', 'Squarepoint Capitals', '投資会社', '投資機会'],
  authors: [{ name: 'Squarepoint Capitals' }],
  creator: 'Squarepoint Capitals',
  publisher: 'Squarepoint Capitals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://squarepoint-capitals.com'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://Squarepoint Capitals.org',
    siteName: 'Squarepoint Capitals',
    title: 'Squarepoint Capitals | 日本のリーディング投資会社',
    description: 'Squarepoint Capitalsは、革新的な金融ソリューションと投資機会を提供する日本のリーディング投資会社です。',
    images: [
      {
        url: '/logo.ico',
        width: 800,
        height: 600,
        alt: 'Squarepoint Capitals ロゴ',
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