import { compareDesc } from 'date-fns'
import React from 'react'
import { allPosts, Post as PostInterface } from 'contentlayer/generated'
import { supabase } from '@/db/dbClient'
import { PostTeaser, Post } from './PostListItem'

export const PostsList = async ({ limited }: { limited?: boolean }) => {
  const { data: dbPosts } = await supabase.from('posts').select('*')
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  const limitedPosts = limited ? posts.slice(0, 3) : posts

  return (
    <div className='flex flex-col gap-6'>
      {limitedPosts.map((post: PostInterface) => {
        if (post.teaser) return <PostTeaser key={post._id} post={post} />

        const dbPost = dbPosts?.find(
          (currentDbPost) => currentDbPost.post_id === post._raw.flattenedPath,
        )

        return (
          <Post
            key={post._id}
            post={post}
            likes={dbPost?.likes}
            views={dbPost?.views}
          />
        )
      })}
    </div>
  )
}
