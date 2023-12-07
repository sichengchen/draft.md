import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from "clsx";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'draft.md',
  description: 'Minimal online Markdown editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-white", "dark:bg-gray-900", "overflow-hidden")}>{children}</body>
    </html>
  )
}
