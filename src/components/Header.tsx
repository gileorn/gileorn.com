'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Navbar,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  Avatar,
} from '@nextui-org/react'

import { Routes } from '@/routes'
import { ThemeSwitch } from './ThemeSwitch'
import { useIsScrollTop } from '@/hooks/useIsScrolledToTop'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const isScrolledToTop = useIsScrollTop()
  const pathname = usePathname()

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      isBordered={!isScrolledToTop}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'mx-auto bg-background dark:bg-dark-background transition-colors duration-500',
        toggle: 'order-last',
        menu: 'bg-zinc-50',
        item: [
          'dark:data-[active=true]:text-dark-accent data-[active=true]:text-accent',
          'text-main dark:text-dark-main',
        ],
        content: 'max-w-screen-md mx-auto justify-between',
      }}
    >
      <div className='max-w-screen-md mx-auto justify-between flex items-center flex-grow h-full'>
        <Link href='/'>
          <Avatar
            src='/img/avatars/2.jpeg'
            isBordered
            radius='full'
            size='sm'
            className='mr-4'
            classNames={{ base: 'ring-zinc-300 dark:ring-zinc-500' }}
          />
        </Link>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <div className='hidden sm:flex gap-8'>
          {Routes.map((route) => {
            const isActive = pathname === route.path
            return (
              <NavbarItem key={route.path} isActive={isActive}>
                <Link href={route.path} className='text-inherit'>
                  {route.name}
                </Link>
              </NavbarItem>
            )
          })}
        </div>

        <ThemeSwitch />

        <NavbarMenu>
          {Routes.map((route) => (
            <NavbarMenuItem key={route.path}>
              <Link className='w-full' href={route.path} size='lg'>
                {route.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  )
}
