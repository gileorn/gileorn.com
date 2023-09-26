import '@/styles/prism-darcula.css'
import '@/styles/prism-plus.css'

import { CustomImage } from '@/components/Mdx/CustomImage'
import { CustomLink } from '@/components/Mdx/CustomLink'
import { CustomParagraph } from '@/components/Mdx/CustomParaghraph'
import {
  CustomListItem,
  CustomOrderedList,
  CustomUnorderedList,
} from '@/components/Mdx/CustomList'
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from '@/components/Mdx/CustomHeading'

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { PostSidebar } from '@/components/PostSidebar'
import { PostHeading } from '@/components/PostHeading'
import { CommentSection } from '@/components/CommentSection'

export const generateStaticParams = () =>
  allPosts.map((post) => ({ post: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)
  return { title: post.title }
}

const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  // pre: CustomPre,
  a: CustomLink,
  p: CustomParagraph,
  img: CustomImage,
  ul: CustomUnorderedList,
  ol: CustomOrderedList,
  li: CustomListItem,
}

const PostLayout = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className=''>
      <div className='mb-12'>
        <PostHeading post={post} />
      </div>
      <div className='flex items-start gap-12 relative'>
        <PostSidebar post={post} />
        <article className='flex-grow'>
          <MDXContent components={mdxComponents} />
        </article>
      </div>
      <CommentSection />
    </div>
  )
}

export default PostLayout
