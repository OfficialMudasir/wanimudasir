import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { webpSource } from '../../lib/images'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  onError,
  ...rest
}: OptimizedImageProps) {
  const [preferWebp, setPreferWebp] = useState(true)
  const webp = preferWebp ? webpSource(src) : null
  const loading = priority ? 'eager' : rest.loading ?? 'lazy'
  const fetchPriority = priority ? 'high' : rest.fetchPriority

  const handleError = () => {
    if (preferWebp && webpSource(src)) {
      setPreferWebp(false)
      return
    }
    onError?.()
  }

  const imgProps = {
    alt,
    width,
    height,
    loading,
    decoding: 'async' as const,
    fetchPriority,
    className,
    onError: handleError,
    ...rest,
  }

  if (!webp) {
    return <img src={src} {...imgProps} />
  }

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={src} {...imgProps} />
    </picture>
  )
}
