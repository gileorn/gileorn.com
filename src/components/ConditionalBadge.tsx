import React from 'react'
import { Badge, BadgeProps } from '@nextui-org/react'

export const ConditionalBadge = ({
  size = 'sm',
  ...props
}: {
  children: React.ReactNode
  showBadge?: boolean
  content: string
  size?: BadgeProps['size']
}) => {
  if (!props.showBadge) return props.children

  return (
    <Badge
      classNames={{
        base: 'w-full',
        badge:
          'bg-accent text-white border border-zinc-300 dark:border-zinc-100 shadow-md',
      }}
      content={props.content}
      variant='faded'
      placement='top-right'
      size={size}
    >
      {props.children}
    </Badge>
  )
}
