import './globals.css'
import cn from 'clsx'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'bg-zinc-100 dark:bg-zinc-700 min-w-full min-h-screen text-zinc-800 dark:text-zinc-50 text-base transition-colors duration-500',
        )}
      >
        <Providers>
          <Header />
          <main className='relative py-12 w-full mx-auto container'>
            {/* <GoHomeButton /> */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
