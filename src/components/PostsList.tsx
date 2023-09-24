'use client'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import { ConditionalBadge } from './ConditionalBadge'
import { Eye, Heart, Timer } from 'lucide-react'
import colors from 'tailwindcss/colors'

const MINS_FOR_CUP_OF_COFFEE = 4

export const ReadTime = ({ readTime }: { readTime: Post['readTime'] }) => {
  if (!readTime) return null

  const cupsOfCoffee = Math.ceil(readTime / MINS_FOR_CUP_OF_COFFEE)
  const cups = new Array(cupsOfCoffee).fill('☕')

  return <div>{cups.map((cup) => cup)}</div>
}

const PostStats = ({ post }: { post: Post }) => (
  <div className='w-fit flex flex-row md:flex-col md:gap-2 gap-6 flex-shrink-0 flex-grow-0'>
    <div className='flex items-center gap-2'>
      <Eye size={16} />
      <div className='text-sm'>2134</div>
    </div>
    <div className='flex items-center gap-2'>
      <Heart fill={colors.rose[400]} stroke={colors.rose[400]} size={16} />
      <div className='text-sm'>198</div>
    </div>
    <div className='flex items-center gap-2'>
      <Timer size={16} />
      <div className='text-sm'>{post.readTime}m</div>
    </div>
  </div>
)

const Post = ({ post }: { post: Post }) => (
  <Link
    className='flex gap-6 mb-6 bg-foreground p-4 rounded-xl cursor-pointer transition hover:glow'
    key={post._id}
    href={post.url}
  >
    <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
      <div>
        <h2 className='text-xl'>
          <div className='font-bold text-accent'>
            {/* <div className='underline decoration-solid decoration-m-accent underline-offset-2 font-bold text-accent'> */}
            {post.title}
          </div>
        </h2>
        <time
          dateTime={post.date}
          className='mb-2 block text-xs text-secondary dark:text-dark-secondary'
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.tags && (
          <div className='flex gap-2 mb-2'>
            {post.tags?.map((tag) => (
              <div
                key={tag}
                className='rounded-[4px] text-tiny px-2 py-0 bg-zinc-300 text-zinc-800'
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div>{post.description}</div>
      </div>
      <PostStats post={post} />
    </div>
  </Link>
)

export const PostTeaser = ({ post }: { post: Post }) => (
  <ConditionalBadge content='Coming soon' showBadge>
    <div className='flex gap-6 mb-4 bg-foreground p-4 rounded-xl w-full'>
      <div>
        <h2 className='text-xl'>
          <div className='font-bold text-secondary'>{post.title}</div>
        </h2>
        {/* <div>{post.description}</div> */}
      </div>
    </div>
  </ConditionalBadge>
)

export const PostsList = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      {posts.map((post: Post) => {
        if (post.teaser) return <PostTeaser key={post._id} post={post} />

        return <Post key={post._id} post={post} />
      })}
    </div>
  )
}
