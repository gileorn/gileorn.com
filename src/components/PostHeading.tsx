import React from 'react'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const PostHeading = ({ post }: { post: Post }) => (
  <div className='text-center'>
    <h1 className='md:text-5xl text-4xl md:px-14 font-bold mb-4'>
      {post.title}
    </h1>
    <div className='text-secondary mb-1'>
      Posted on {format(parseISO(post.date), 'LLLL d, yyyy')} • {post.readTime}{' '}
      min read
    </div>
    {post.transcript_of_talk &&
      post.live_talk_date &&
      post.event_location &&
      post.event_name && (
        <div className='mt-2 bg-foreground rounded-md px-4 py-2 mx-auto w-fit'>
          This is a transcript of a live talk &quot;{post.transcript_of_talk}
          &quot; at the event {post.event_name} in {post.event_location} on{' '}
          {format(parseISO(post.live_talk_date), 'LLLL d, yyyy')}.
        </div>
      )}
  </div>
)
