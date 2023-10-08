import React, { useEffect, useState } from 'react'
import { Skeleton, Switch } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Skeleton className='w-14 h-8 rounded-full mr-2' />

  return (
    <Switch
      size='lg'
      classNames={{
        wrapper: 'group-data-[selected=true]:bg-accent bg-accent',
        thumb: 'bg-zinc-50',
      }}
      isSelected={theme === 'light'}
      onValueChange={(value) => setTheme(value ? 'light' : 'dark')}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Sun size={16} className={className} />
        ) : (
          <Moon size={16} className={className} />
        )
      }
    />
  )
}
