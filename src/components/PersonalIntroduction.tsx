'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AtSign, Linkedin, Github, Twitter } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import clsx from 'clsx'

const EMAIL = 'yverisan@gmail.com'

export const PersonalIntroduction = ({ className }: { className?: string }) => (
  <div className={clsx(className, 'flex items-center gap-8')}>
    <Image
      src='/img/avatars/1.jpg'
      width={200}
      height={200}
      alt='Avatar'
      className='rounded-full relative flex-shrink-0'
    />

    <div>
      <div className=''>Hello, my name is</div>
      <h2 className='text-5xl font-bold mb-4'>Sergei Iakovlev</h2>
      <div className='text-zinc-500 mb-4'>
        I am a software engineer and Neovim entusiast interested in philosophy,
        stoicism and psychology. Armenian born and raised in Russia, currently
        living in Barcelona, Spain.
      </div>
      <div className='flex gap-4'>
        <Popover placement='bottom' showArrow={true} backdrop='blur'>
          <PopoverTrigger onClick={() => navigator.clipboard.writeText(EMAIL)}>
            <div className='hover:text-zinc-500 cursor-pointer relative'>
              <AtSign width={32} height={32} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className='p-4 bg-white rounded-md'>
              <div className='text-small font-bold'>Coplied to clipboard</div>
              <div className='text-tiny'>yverisan@gmail.com</div>
            </div>
          </PopoverContent>
        </Popover>
        <div className='hover:text-zinc-500'>
          <AtSign width={32} height={32} />
        </div>
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
      </div>
    </div>
  </div>
)
