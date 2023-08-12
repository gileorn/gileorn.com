import Image from 'next/image'
import Link from 'next/link'
import { GitHub, Linkedin, Twitter } from 'react-feather'

export default function AboutPage() {
  return (
    <div>
      <div className='flex items-center gap-8 mb-8'>
        <div className='p-1 relative w-40 h-40 shrink-0'>
          <div className='absolute rounded-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent animate-spin [animation-duration:5s] inset-0' />
          <Image
            src='/img/avatar.jpg'
            width={152}
            height={152}
            alt='Avatar'
            className='rounded-full relative'
          />
        </div>

        <div>
          <div className='mb-2'>Hello, my name is</div>
          <h2 className='text-5xl font-bold mb-6'>Sergei Iakovlev</h2>
          <div className='text-zinc-500'>
            Software engineer and frontend developer with product mindset, yet
            always eager to learn something new to keep my vivid interest in the
            development. I genuinely like to write code and everything around
            it.
          </div>
        </div>
      </div>
      <div className='flex gap-4 ml-48'>
        <Link href='https://github.com/gileorn' className='hover:text-zinc-500'>
          <GitHub width={32} height={32} />
        </Link>
        <Link href='https://github.com/gileorn' className='hover:text-zinc-500'>
          <Linkedin width={32} height={32} />
        </Link>
        <Link href='https://github.com/gileorn' className='hover:text-zinc-500'>
          <Twitter width={32} height={32} />
        </Link>
      </div>
    </div>
  )
}
