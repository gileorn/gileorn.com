import { Linkedin, Github, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => (
  <div className='relative py-6 md:py-12 w-full mx-auto max-w-screen-lg px-6'>
    <div className='border-b border mb-8' />
    <div className='flex flex-wrap justify-between items-center gap-4'>
      <div className='flex items-center gap-4'>
        <Image
          alt='Avatar'
          src='/img/avatars/2.jpeg'
          height={40}
          width={40}
          className='rounded-full'
        />
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
      <div>© 2023 Sergei Iakovlev</div>
    </div>
  </div>
)
