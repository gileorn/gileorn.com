import React from 'react'
import { BookMarked, FileText, Mic } from 'lucide-react'
import { PersonalIntroduction } from '@/components/PersonalIntroduction'
import { PostsList } from '@/components/PostsList'
import { ArrowLink } from '@/components/ArrowLink'

export default function AboutPage() {
  return (
    <div className='max-w-screen-md mx-auto'>
      <div className='col-span-full mb-6'></div>
      <PersonalIntroduction className='mb-20' />
      <div className='flex flex-col gap-8 md:gap-12'>
        <div>
          <div className='flex items-center gap-2 mb-6'>
            <FileText size={32} />
            <h2 className='text-xl font-medium'>Latest Blog Posts</h2>
          </div>
          <PostsList limited />
          <ArrowLink text='See All' href='/posts' className='mt-2' />
        </div>
        <div>
          <div className='flex items-center gap-2 mb-6'>
            <Mic size={32} />
            <h2 className='text-xl font-medium'>Appearances</h2>
          </div>
          <div className='bg-foreground px-8 py-6 rounded-xl text-secondary font-bold text-xl'>
            Coming soon
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2 mb-6'>
            <BookMarked size={32} />
            <h2 className='text-xl font-medium'>Bookmarks</h2>
          </div>
          <div className='bg-foreground px-8 py-6 rounded-xl text-secondary font-bold text-xl'>
            Coming soon
          </div>
        </div>
      </div>
    </div>
  )
}
