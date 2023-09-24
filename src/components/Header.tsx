'use client'

import React from 'react'
import cn from 'clsx'
import { usePathname } from 'next/navigation'
import {
  Navbar,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Link,
  NavbarMenuToggle,
} from '@nextui-org/react'

import { Routes } from '@/routes'
import { ThemeSwitch } from './ThemeSwitch'
import { useIsScrollTop } from '@/hooks/useIsScrolledToTop'
import { ConditionalBadge } from './ConditionalBadge'

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
        base: 'mx-auto transition-colors duration-500',
        toggle: 'order-last',
        menu: 'text-main bg-inherit',
        item: [
          'dark:data-[active=true]:text-dark-accent data-[active=true]:text-accent',
          'text-main dark:text-dark-main',
        ],
        content: 'max-w-screen-md mx-auto justify-between',
      }}
    >
      <div className='max-w-screen-md mx-auto justify-between flex items-center flex-grow h-full md:px-4'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <div className='hidden sm:flex gap-8'>
          {Routes.map((route) => {
            const isActive = pathname === route.path
            const isDisabled = route.disabled

            return (
              <NavbarItem key={route.path} isActive={isActive}>
                <ConditionalBadge showBadge={isDisabled} content='soon'>
                  <Link
                    href={route.path}
                    isDisabled={isDisabled}
                    className='text-inherit text-lg'
                  >
                    {route.name}
                  </Link>
                </ConditionalBadge>
              </NavbarItem>
            )
          })}
        </div>

        <ThemeSwitch />

        <NavbarMenu>
          {Routes.map((route) => {
            const isActive = pathname === route.path
            const isDisabled = route.disabled

            return (
              <NavbarMenuItem key={route.path}>
                <Link
                  className={cn('text-main text-xl', isActive && 'text-accent')}
                  isDisabled={isDisabled}
                  href={route.path}
                >
                  <ConditionalBadge showBadge={isDisabled} content='soon'>
                    {route.name}
                  </ConditionalBadge>
                </Link>
              </NavbarMenuItem>
            )
          })}
        </NavbarMenu>
      </div>
    </Navbar>
  )
}
