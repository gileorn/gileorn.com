import Image from 'next/image'
import Link from 'next/link'

import { allPosts, Post } from 'contentlayer/generated'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import compareDesc from 'date-fns/compareDesc'
import { AtSign, Github, Linkedin, Twitter, FileText } from 'lucide-react'
import { PersonalIntroduction } from '@/components/PersonalIntroduction'

export default function AboutPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className=''>
      <div className='col-span-full mb-6'></div>
      <PersonalIntroduction className='mb-12' />
      <div className=''>
        <div className='flex items-center gap-2 mb-8 border-b pb-4'>
          <FileText size={32} />
          <h2 className='text-xl font-medium'>Blog Posts</h2>
        </div>
        {posts.map((post: Post) => (
          <div className='flex gap-6 mb-8 ' key={post._id}>
            <div className='w-52 h-32 relative rounded-xl overflow-hidden shrink-0'>
              <Image
                alt='Article cover image'
                src={post.cover}
                fill
                className='object-cover shrink-0'
              />
            </div>
            <div>
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
          </div>
        ))}
      </div>
    </div>
  )
}
