import React, { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Switch
      size='lg'
      classNames={{
        wrapper: 'group-data-[selected=true]:bg-indigo-500 dark:bg-indigo-400',
      }}
      isSelected={mounted && theme === 'light'}
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
