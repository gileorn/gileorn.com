import '@/styles/prism-darcula.css'
import '@/styles/prism-plus.css'

import { CustomImage } from '@/components/Mdx/CustomImage'
import { CustomLink } from '@/components/Mdx/CustomLink'
// import { CustomPre } from '@/components/Mdx/CustomPre'
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from '@/components/Mdx/CustomHeading'

import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = () =>
  allPosts.map((post) => ({ post: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)
  return { title: post.title }
}

// Custom components/renderers to pass to MDX.
const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  // pre: CustomPre,
  a: CustomLink,
  img: CustomImage,
}

const PostLayout = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className=''>
      <div className='mb-12'>
        <h1 className='text-4xl font-bold'>{post.title}</h1>
        <time dateTime={post.date} className='mb-1 text-xs text-secondary'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <MDXContent components={mdxComponents} />
      {/* <div */}
      {/*   className='[&>*]:mb-3 [&>*:last-child]:mb-0' */}
      {/*   dangerouslySetInnerHTML={{ __html: post.body.html }} */}
      {/* /> */}
    </article>
  )
}

export default PostLayout
