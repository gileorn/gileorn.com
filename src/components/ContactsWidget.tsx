import React from 'react'
import { AtSign, Facebook, Github, Linkedin, Twitter, User } from 'lucide-react'
import { Widget } from './Widget'
import Link from 'next/link'

interface ContactsWidgetProps {
  className?: string
}

export function ContactsWidget({ className }: ContactsWidgetProps) {
  return (
    <Widget
      title='Contacts'
      icon={<User width={24} height={24} />}
      className={className}
    >
      <div className='flex gap-4'>
        <Link
          href='https://twitter.com/gileorn'
          className='hover:text-zinc-500'
        >
          <AtSign width={32} height={32} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/iakovlev-sv/'
          className='hover:text-zinc-500'
        >
          <Linkedin width={32} height={32} />
        </Link>
        <Link href='https://github.com/gileorn' className='hover:text-zinc-500'>
          <Github width={32} height={32} />
        </Link>
        <Link
          href='https://twitter.com/gileorn'
          className='hover:text-zinc-500'
        >
          <Twitter width={32} height={32} />
        </Link>
        <Link
          href='https://twitter.com/gileorn'
          className='hover:text-zinc-500'
        >
          <Facebook width={32} height={32} />
        </Link>
      </div>
    </Widget>
  )
}
