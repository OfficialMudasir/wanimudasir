import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'

function encodeAssetUrl(url: string) {
  return url.replace(/ /g, '%20')
}

export function HeroBackground() {
  const gifs = profile.heroBackgroundGifs
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const allLoaded = loadedCount >= gifs.length

  useEffect(() => {
    gifs.forEach((src) => {
      const image = new Image()
      image.src = src
      image.onload = () => setLoadedCount((count) => count + 1)
      image.onerror = () => setLoadedCount((count) => count + 1)
    })
  }, [gifs])

  useEffect(() => {
    if (!allLoaded) return

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % gifs.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [allLoaded, gifs.length])

  return (
    <>
      <div className={`hero__bg-loader ${allLoaded ? 'hero__bg-loader--hidden' : ''}`} aria-hidden={allLoaded}>
        <div className="hero__bg-loader__rings">
          <span />
          <span />
          <span />
        </div>
        <p className="hero__bg-loader__text">Loading experience…</p>
      </div>

      <div className="hero__bg-layers" aria-hidden="true">
        {gifs.map((src, index) => (
          <div
            key={src}
            className={`hero__bg-layer ${index === activeIndex ? 'hero__bg-layer--active' : ''}`}
            style={{ backgroundImage: `url("${encodeAssetUrl(src)}")` }}
          />
        ))}
      </div>
    </>
  )
}
