import React from 'react'
import { Badge, BadgeProps } from '@nextui-org/react'

export const ConditionalBadge = ({
  size = 'lg',
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
        badge: 'font-normal bg-zinc-400 text-white shadow-md  px-2 py-[2px]',
      }}
      content={props.content}
      variant='faded'
      placement='top-right'
      size={size}
      disableOutline
    >
      {props.children}
    </Badge>
  )
}
