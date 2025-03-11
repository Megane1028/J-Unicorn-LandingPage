import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Netflix built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className="app">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 