import './globals.css'
import cn from 'clsx'

import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gileorn Dev Blog',
  description: 'Personal website and dev blog of Sergei Iakovlev',
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
          'flex flex-col bg-background dark:bg-dark-background min-h-screen text-mn text-base transition-colors duration-500',
        )}
      >
        <Providers>
          <Header />
          <main className='flex-grow h-full relative py-6 md:py-12 w-full mx-auto max-w-screen-lg px-6'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
