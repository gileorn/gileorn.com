import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = () =>
  allPosts.map((post) => ({ post: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { post: string } }) => {
  const post = allPosts.find(
    (currentPost) => currentPost._raw.flattenedPath === params.post,
  )
  if (!post) throw new Error(`Post not found for post: ${params.post}`)

  return (
    <article className=''>
      <div className=''>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      <div
        className='[&>*]:mb-3 [&>*:last-child]:mb-0'
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}

export default PostLayout
