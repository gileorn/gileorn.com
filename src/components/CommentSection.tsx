'use client'

import React from 'react'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export const CommentSection = () => {
  const { theme } = useTheme()

  return (
    <div id='comment' className='mx-auto max-w-prose py-6'>
      <Giscus
        id='comments'
        repo='gileorn/gileorn.com'
        repoId='R_kgDOKGc59w'
        category='General'
        categoryId='DIC_kwDOKGc5984CZoeW'
        mapping='pathname'
        term='Welcome to @giscus/react component!'
        reactionsEnabled='1'
        emitMetadata='1'
        inputPosition='top'
        theme={theme}
        lang='en'
        loading='lazy'
      />
    </div>
  )
}
