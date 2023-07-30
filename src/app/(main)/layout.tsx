import '@/component/style/global.scss'
import type { Metadata } from 'next'
import { roboto } from '@/component/fonts/fonts'

export const metadata: Metadata = {
  title: 'BeLaundry',
  description: 'A Laundry App',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
