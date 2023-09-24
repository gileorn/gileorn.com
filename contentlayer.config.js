import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const WPM = 150

export const calculateReadTime = (text) => {
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / WPM
  const readTime = Math.ceil(minutes)

  return readTime
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    teaser: { type: 'boolean', required: false },
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
})
