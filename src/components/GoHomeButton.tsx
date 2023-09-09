'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { ArrowLeft } from 'react-feather'

export function GoHomeButton() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <Link
      href='/'
      className='flex sticky top-0 left-0 mb-4 w-fit z-10 py-2 px-4 bg-zinc-300/80 backdrop-blur drop-shadow-lg cursor-pointer hover:drop-shadow-2xl transition-all duration-200 ease-in rounded-full border-2 border-zinc-300 /80'
    >
      <ArrowLeft width={24} height={24} className='mr-2' />
      Go back to homepage
    </Link>
  )
}
