import Image from 'next/image'
import Link from 'next/link'
import { CareerSummary } from '@/components/CareerSummary'
import { ContactsWidget } from '@/components/ContactsWidget'

import { allPosts, Post } from 'contentlayer/generated'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import compareDesc from 'date-fns/compareDesc'

export default function AboutPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className='grid grid-cols-5 gap-4'>
      <div className='col-span-full mb-8'>
        <div className='flex items-center gap-8 mb-8'>
          <Image
            src='/img/avatar.jpg'
            width={152}
            height={152}
            alt='Avatar'
            className='rounded-full relative flex-shrink-0'
          />

          <div>
            <div className=''>Hello, my name is</div>
            <h2 className='text-5xl font-bold mb-4'>Sergei Iakovlev</h2>
            <div className='text-zinc-500'>
              I am a software engineer and Neovim entusiast interested in
              philosophy, stoicism and psychology. Armenian born and raised in
              Russia, currently living in Barcelona, Spain. I can proudly call
              myself not only software engineer and frontend developer, but also
              product engineer. I genuinely like to write code and everything
              around it.
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3 row-span-2'>
        {posts.map((post: Post) => (
          <div className='mb-8' key={post._id}>
            <h2 className='mb-1 text-xl'>
              <Link
                href={post.url}
                className='text-blue-700 hover:text-blue-900 dark:text-blue-400'
              >
                {post.title}
              </Link>
            </h2>
            <time
              dateTime={post.date}
              className='mb-2 block text-xs text-gray-600'
            >
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div>{post.description}</div>
          </div>
        ))}
      </div>
      <ContactsWidget className='col-span-2' />
      <CareerSummary className='col-span-2' />
    </div>
  )
}
