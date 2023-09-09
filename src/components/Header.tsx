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

export function Header() {
  const pathname = usePathname()
  const isScrolledToTop = useIsScrollTop()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition  border-b',
        isScrolledToTop && 'border-zinc-300/0',
        !isScrolledToTop && 'border-zinc-300/50',
      )}
    >
      <div className='absolute inset-0 bg-zinc-200/70 backdrop-blur' />
      <div className='mx-auto flex items-center justify-center gap-4 p-4 container relative'>
        {navigationLinks.map((linkItem) => {
          const isActive = pathname === linkItem.path

          return (
            <Link
              href={linkItem.path}
              key={linkItem.path}
              className={cn(
                'font-semibold min-w-[80px] hover:text-green-400',
                isActive && 'text-green-500',
              )}
            >
              {linkItem.title}
            </Link>
          )
        })}
      </div>
    </header>
  )
}
