import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkUnwrapImages from 'remark-unwrap-images'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const WPM = 230

export const calculateReadTime = (text) => {
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / WPM
  const readTime = Math.ceil(minutes)

  return readTime
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    teaser: { type: 'boolean', required: false },
    transcript_of_talk: { type: 'string', required: false },
    live_talk_date: { type: 'date', required: false },
    event_name: { type: 'string', required: false },
    event_location: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: 'number',
      resolve: (doc) => calculateReadTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true }],
    ],
  },
})
