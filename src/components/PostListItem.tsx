'use client'

import React from 'react'
import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import { Post as PortInterface } from 'contentlayer/generated'
import { ConditionalBadge } from './ConditionalBadge'
import { Eye, Heart, Timer } from 'lucide-react'

const MINS_FOR_CUP_OF_COFFEE = 4

export const ReadTime = ({
  readTime,
}: {
  readTime: PortInterface['readTime']
}) => {
  if (!readTime) return null

  const cupsOfCoffee = Math.ceil(readTime / MINS_FOR_CUP_OF_COFFEE)
  const cups = new Array(cupsOfCoffee).fill('☕')

  return <div>{cups.map((cup) => cup)}</div>
}

const PostStats = ({
  post,
  likes = 0,
  views = 0,
}: {
  post: PortInterface
  likes?: number
  views?: number
}) => (
  <div className='w-fit flex flex-row md:flex-col md:gap-2 gap-6 flex-shrink-0 flex-grow-0'>
    <div className='flex items-center gap-2'>
      <Eye size={20} />
      <div className=''>{views}</div>
    </div>
    <div className='flex items-center gap-2'>
      <Heart size={20} />
      <div className='k'>{likes}</div>
    </div>
    <div className='flex items-center gap-2'>
      <Timer size={20} />
      <div className=''>{post.readTime}m</div>
    </div>
  </div>
)

export const Post = ({
  post,
  likes,
  views,
}: {
  post: PortInterface
  likes?: number
  views?: number
}) => (
  <Link
    className='flex gap-6 bg-foreground py-6 px-8 rounded-xl cursor-pointer transition hover:glow'
    key={post._id}
    href={post.url}
  >
    <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
      <div>
        <h2 className='text-2xl font-bold mb-1 dark:text-m-dark-accent'>
          {post.title}
        </h2>
        <time
          dateTime={post.date}
          className='mb-3 block text-xs text-secondary dark:text-dark-secondary'
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.tags && (
          <div className='flex gap-2 mb-2 flex-wrap'>
            {post.tags?.map((tag) => (
              <div
                key={tag}
                className='rounded-[4px] text-tiny px-[8px] py-[3px] bg-zinc-300 text-zinc-800'
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div className='text-secondary'>{post.description}</div>
      </div>
      <PostStats post={post} likes={likes} views={views} />
    </div>
  </Link>
)

export const PostTeaser = ({ post }: { post: PortInterface }) => (
  <ConditionalBadge content='soon' showBadge>
    <div className='flex gap-6 bg-foreground px-8 py-6 rounded-xl w-full'>
      <div>
        <h2 className='text-xl font-bold text-secondary'>{post.title}</h2>
      </div>
    </div>
  </ConditionalBadge>
)
