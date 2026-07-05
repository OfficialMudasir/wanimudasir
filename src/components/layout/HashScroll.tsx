import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }, [pathname, hash])

  return null
}
