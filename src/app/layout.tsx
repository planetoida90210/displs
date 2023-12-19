import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'



export const metadata: Metadata = {
  title: 'Disney+ Clone',
  description: "For educational purposes only. I don't own any of the content.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
