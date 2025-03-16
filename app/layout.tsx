import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Footer from "../components/commons/Footer"
import Navbar from "../components/commons/Navbar"
import StyledComponentsRegistry from './registry'

export const metadata = {
  title: 'J-unicorn',
  description: 'Japan Leading Investment',
  icons: {
    icon: '/logo.ico',
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