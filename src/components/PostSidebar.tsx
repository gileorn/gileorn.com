import React from 'react'
import { Timer, Eye, Heart } from 'lucide-react'
import Image from 'next/image'
import TableOfContents from './TableOfContents'
import colors from 'tailwindcss/colors'
import { Post } from 'contentlayer/generated'

export const PostSidebar = ({ post }: { post: Post }) => (
  <div className='border-r border-m-main/10 dark:border-m-dark-main/20 pr-8 hidden hide-scrollbar bottom-6 lg:flex pb-14 flex-col gap-8 sticky top-20 right-0 w-64 flex-shrink-0 max-h-[calc(100vh-64px)] overflow-y-scroll'>
    <div className='flex items-center gap-4'>
      <div className='flex items-center gap-2'>
        <Timer size={24} />
        <div className='text-sm'>{post.readTime}m</div>
      </div>
      <div className='flex items-center gap-2'>
        <Eye size={24} />
        <div className='text-sm'>2134</div>
      </div>
      <div className='flex items-center gap-2'>
        <Heart fill={colors.rose[400]} stroke={colors.rose[400]} size={24} />
        <div className='text-sm'>198</div>
      </div>
    </div>
    <div>
      <div className='font-semibold text-lg mb-4'>Author Info</div>
      <div className='flex items-center gap-2'>
        <Image
          alt='Avatar'
          src='/img/avatars/2.jpeg'
          height={40}
          width={40}
          className='rounded-full'
        />
        <div>
          <div className='font-semibold'>Sergei Iakovlev</div>
          <div className='text-sm'>Software engineer</div>
        </div>
      </div>
    </div>
    <TableOfContents source={post.body.raw} />
  </div>
)
