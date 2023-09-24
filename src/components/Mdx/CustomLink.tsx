import { Link2 } from 'lucide-react'
import Link from 'next/link'

type Props = React.ComponentPropsWithoutRef<'a'>

export const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink)
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    )

  if (isAnchorLink)
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )

  return (
    <a target='_blank' rel='noopener noreferrer' href={href} {...rest}>
      {children}
      {typeof children === 'string' && (
        <Link2 className='ml-1 inline-block h-4 w-4' />
      )}
    </a>
  )
}
