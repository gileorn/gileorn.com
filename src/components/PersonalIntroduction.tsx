'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AtSign, Linkedin, Github, Twitter } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import clsx from 'clsx'

const EMAIL = 'yverisan@gmail.com'

export const PersonalIntroduction = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      className,
      'flex items-center flex-col gap-4 md:flex-row md:gap-8',
    )}
  >
    <Image
      priority
      src='/img/avatars/1.jpg'
      width={200}
      height={200}
      alt='Avatar'
      className='rounded-full relative flex-shrink-0'
    />

    <div className='text-center md:text-left'>
      <div className=''>Hello, my name is</div>
      <h2 className='text-5xl font-bold mb-4'>Sergei Iakovlev</h2>
      <div className='text-secondary mb-4'>
        I am a software engineer and Neovim entusiast interested in philosophy,
        stoicism and psychology. Armenian born and raised in Russia, currently
        living in Barcelona, Spain.
      </div>
      <div className='flex gap-4 justify-center md:justify-start'>
        <Popover
          placement='bottom'
          backdrop='blur'
          classNames={{ base: 'bg-background' }}
        >
          <PopoverTrigger onClick={() => navigator.clipboard.writeText(EMAIL)}>
            <div className='text-hover cursor-pointer relative transition-colors'>
              <AtSign width={32} height={32} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className='p-4 rounded-md'>
              <div className='text-small font-bold'>Coplied to clipboard</div>
              <div className='text-tiny'>yverisan@gmail.com</div>
            </div>
          </PopoverContent>
        </Popover>
        <Link
          href='https://www.linkedin.com/in/iakovlev-sv/'
          className='text-hover transition-colors'
        >
          <Linkedin width={32} height={32} />
        </Link>
        <Link
          href='https://github.com/gileorn'
          className='text-hover transition-colors'
        >
          <Github width={32} height={32} />
        </Link>
        <Link
          href='https://twitter.com/gileorn'
          className='text-hover transition-colors'
        >
          <Twitter width={32} height={32} />
        </Link>
      </div>
    </div>
    <button
      onClick={() => {
        console.log(thisiserror)
      }}
    >
      hello
    </button>
  </div>
)
