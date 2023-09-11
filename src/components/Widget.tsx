import React from 'react'
import cn from 'clsx'

interface WidgetProps extends React.PropsWithChildren {
  icon: JSX.Element
  title: string
  className?: string
}

export function Widget({ icon, title, children, className }: WidgetProps) {
  return (
    <div
      className={cn(
        className,
        'border border-zinc-200 p-6 rounded-2xl h-fit bg-zinc-50',
      )}
    >
      <div className='flex items-center mb-6'>
        {icon}
        <h3 className='font-bold ml-2'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}
