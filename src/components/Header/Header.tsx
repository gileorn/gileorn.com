'use client'

import { useIsScrollTop } from '@/hooks/useIsScrolledToTop'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationLinks = [
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/posts',
    title: 'Posts',
  },
  {
    path: '/uses',
    title: 'Uses',
  },
]

export default function Header() {
  const pathname = usePathname()
  const isScrolledToTop = useIsScrollTop()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition  border-b',
        isScrolledToTop && 'border-zinc-300/0',
        !isScrolledToTop && 'border-zinc-300/50'
      )}
    >
      <div className='absolute inset-0 bg-zink-50/95 supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:backdrop-blur-lg dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/50' />
      <div className='mx-auto flex items-center justify-center gap-4 p-4 container relative'>
        {navigationLinks.map((linkItem) => {
          const isActive = pathname === linkItem.path

          return (
            <Link
              href={linkItem.path}
              key={linkItem.path}
              className={cn(isActive && 'text-green-300')}
            >
              {linkItem.title}
            </Link>
          )
        })}
      </div>
    </header>
  )
}
