import React from 'react'
import { Sun, Moon } from 'lucide-react'
import cn from 'clsx'

interface UiModeSelectorProps {
  className?: string
}

enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export const UiModeSelector = ({ className }: UiModeSelectorProps) => {
  const theme = localStorage.getItem('theme') || Themes.Light
  const Icon = theme === 'dark' ? Moon : Sun

  return (
    <div>
      <Icon width={24} height={24} />
    </div>
  )
}
