import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type Props = LinkProps & { text: string; className?: string }

export const ArrowLink = (props: Props) => (
  <Link
    {...props}
    className={clsx(
      props.className,
      'text-xl flex w-fit items-center text-accent text-hover gap-2 p-2 hover:gap-3 transition-[gap]',
    )}
  >
    {props.text}
    <ArrowRight />
  </Link>
)
