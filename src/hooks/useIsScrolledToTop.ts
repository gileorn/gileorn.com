import { useEffect, useState } from 'react'

export function useIsScrollTop() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolledToTop
}
