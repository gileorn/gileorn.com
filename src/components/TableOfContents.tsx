// ref: https://github.com/ekomenyong/kommy-mdx/blob/main/src/components/TOC.tsx
'use client'

import clsx from 'clsx'
import GithubSlugger from 'github-slugger'
import { useEffect, useRef, useState } from 'react'

// eslint-disable-next-line no-unused-vars
type UseIntersectionObserverType = (setActiveId: (id: string) => void) => void

const useIntersectionObserver: UseIntersectionObserverType = (setActiveId) => {
  const headingElementsRef = useRef<{
    [key: string]: IntersectionObserverEntry
  }>({})

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('article h2,h3'),
    )

    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement

        return map
      }, headingElementsRef.current)

      const visibleHeadings: IntersectionObserverEntry[] = []

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1)
        setActiveId(visibleHeadings[0].target.id)
      else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id),
        )

        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      // rootMargin: '0px 0px -70% 0px',
      rootMargin: '0px 0px -60% 0px',
    })

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

type Props = {
  source: string
}

const TableOfContents = ({ source }: Props) => {
  const headingLines = source
    .split('\n')
    .filter((line) => line.match(/^###?\s/))

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : 2
    const slugger = new GithubSlugger()

    return {
      text,
      level,
      id: slugger.slug(text),
    }
  })

  const [activeId, setActiveId] = useState<string>()

  useIntersectionObserver(setActiveId)

  return (
    <div className=''>
      <p className='mb-4 text-lg text-main font-semibold text-gray-900 transition-colors dark:text-gray-100'>
        Table of Contents
      </p>
      <div className='flex flex-col items-start justify-start'>
        {headings.map((heading, index) => (
          <button
            key={index}
            className={clsx(
              heading.id === activeId ? 'text-accent' : '',
              heading.level === 3 && 'pl-4',
              'text-left mb-2 last:mb-0 text-sm',
            )}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
            }}
          >
            {heading.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents
