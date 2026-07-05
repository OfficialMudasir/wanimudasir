import { absoluteUrl } from '../config/site'

/** Resolve asset paths to absolute URLs for Open Graph / JSON-LD */
export function toAbsoluteAssetUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  let normalized = path
  if (base && normalized.startsWith(base)) {
    normalized = normalized.slice(base.length)
  }
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  return absoluteUrl(normalized)
}

/** WebP variant path for raster images (generated at build time) */
export function webpSource(src: string) {
  if (/\.(gif|webp|svg|avif)$/i.test(src)) return null
  return src.replace(/\.(png|jpe?g)$/i, '.webp')
}
