import { useEffect, useState } from 'react'

const MOBILE_NAV_QUERY = '(max-width: 1199px)'

export function useIsMobileNav() {
  const [isMobileNav, setIsMobileNav] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_NAV_QUERY).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_QUERY)
    const onChange = (event: MediaQueryListEvent) => setIsMobileNav(event.matches)

    setIsMobileNav(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return isMobileNav
}
