import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY + offset
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [idsKey, offset, sectionIds])

  return activeId
}

export function useBackToTop(threshold = 200) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return visible
}

export function useTypewriter(items: string[], typingSpeed = 80, pauseMs = 2000) {
  const [display, setDisplay] = useState('')
  const [itemIndex, setItemIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = items[itemIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex))
        if (charIndex === current.length) {
          timeout = setTimeout(() => setDeleting(true), pauseMs)
        } else {
          setCharIndex((c) => c + 1)
        }
      }, typingSpeed)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex))
        if (charIndex === 0) {
          setDeleting(false)
          setItemIndex((i) => (i + 1) % items.length)
        } else {
          setCharIndex((c) => c - 1)
        }
      }, typingSpeed / 2)
    }

    return () => clearTimeout(timeout)
  }, [items, itemIndex, charIndex, deleting, typingSpeed, pauseMs])

  return display
}

export function useInViewOnce(threshold = 0.2) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, inView, threshold])

  return { setRef, inView }
}
