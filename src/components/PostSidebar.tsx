'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import TableOfContents from './TableOfContents'
import { Timer, Eye, Heart } from 'lucide-react'
import { Skeleton } from '@nextui-org/react'

import type { Post } from 'contentlayer/generated'

import cn from 'clsx'
import colors from 'tailwindcss/colors'
import { supabase } from '@/db/dbClient'
import { useDidMountEffect } from '@/hooks/useDidMountEffect'

const LIKES_LS_FIELD = 'gileorn_likes'

function safeGetLikesMap() {
  if (typeof window === 'undefined') return {}

  const lsField = localStorage.getItem(LIKES_LS_FIELD)
  let parsedField: Record<string, boolean> | null = null

  try {
    if (lsField) parsedField = JSON.parse(lsField)
  } catch {
    // do nothing
  }

  if (!parsedField) parsedField = {}

  return parsedField
}

function setPostLikesMap(postID: string) {
  if (typeof window === 'undefined') return

  const localLikesMap = safeGetLikesMap()
  const newLocalLikesMap = {
    ...localLikesMap,
    [postID]: true,
  }

  localStorage.setItem(LIKES_LS_FIELD, JSON.stringify(newLocalLikesMap))
}

export const PostSidebar = ({ post }: { post: Post }) => {
  const [views, setViews] = useState<number>()
  const [likes, setLikes] = useState<number>()
  const [wasPostLiked, setWasPostLiked] = useState(false)
  const postID = post._raw.flattenedPath

  const likePost = React.useCallback(async () => {
    if (wasPostLiked) return

    setWasPostLiked(true)

    const { data } = await supabase.rpc('increment_likes', {
      postid: post?._raw.flattenedPath,
    })

    if (!data) return

    setLikes(data)
    setPostLikesMap(postID)
  }, [post, postID, wasPostLiked])

  const incrementViewsCounter = React.useCallback(async () => {
    const { data } = await supabase.rpc('increment_views', {
      postid: post?._raw.flattenedPath,
    })

    if (!data) return

    setViews(data)
  }, [post])

  const fetchDbPost = React.useCallback(async () => {
    const { data: dbPost } = await supabase
      .from('posts')
      .select('*')
      .eq('post_id', post._raw.flattenedPath)
      .single()

    if (!dbPost) return

    setLikes(dbPost.likes)
    setViews(dbPost.views)
  }, [post])

  useDidMountEffect(() => {
    const localLikesMap = safeGetLikesMap()

    fetchDbPost()
    setWasPostLiked(Boolean(localLikesMap?.[postID]))

    const timeout = setTimeout(() => {
      if (post) incrementViewsCounter()
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <div className=' hidden hide-scrollbar bottom-6 lg:block pb-14 sticky top-24 right-0 w-64 flex-shrink-0 max-h-[calc(100vh-64px)] overflow-y-scroll'>
      <div className='pr-8 flex flex-col gap-6 border-r border-m-main/10 dark:border-m-dark-main/20'>
        <Skeleton
          className='flex-shrink-0 rounded-md dark:bg-transparent'
          isLoaded={likes !== undefined}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Timer size={24} />
              <div className='text-sm'>{post.readTime}m</div>
            </div>
            <div className='flex items-center gap-2'>
              <Eye size={24} />
              <div className='text-sm'>{views}</div>
            </div>
            <div className='flex items-center gap-2'>
              <Heart
                fillOpacity={wasPostLiked ? 1 : 0}
                fill={colors.rose[400]}
                stroke={colors.rose[400]}
                size={24}
                onClick={likePost}
                className={cn(!wasPostLiked && 'cursor-pointer')}
              />
              <div className='text-sm'>{likes}</div>
            </div>
          </div>
        </Skeleton>
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
    </div>
  )
}
