import React from 'react'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const PostHeading = ({ post }: { post: Post }) => (
  <div className='text-center'>
    <h1 className='md:text-5xl text-4xl md:px-20 font-bold text-accent mb-2'>
      {post.title}
    </h1>
    <time dateTime={post.date} className='mb-1 text-base text-secondary'>
      Posted on {format(parseISO(post.date), 'LLLL d, yyyy')} • {post.readTime}{' '}
      min read
    </time>
  </div>
)
