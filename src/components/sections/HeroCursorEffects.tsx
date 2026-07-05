import { useEffect, useRef, type CSSProperties } from 'react'

interface HeroCursorEffectsProps {
  disabled?: boolean
}

export function HeroCursorEffects({ disabled = false }: HeroCursorEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef({ x: 0.5, y: 0.5 })
  const currentRef = useRef({ x: 0.5, y: 0.5 })
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (disabled) return

    const container = containerRef.current?.parentElement
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      }
    }

    const onLeave = () => {
      targetRef.current = { x: 0.5, y: 0.5 }
    }

    const animate = () => {
      const ease = 0.08
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease

      const x = `${currentRef.current.x * 100}%`
      const y = `${currentRef.current.y * 100}%`
      const parallaxX = `${(currentRef.current.x - 0.5) * 24}px`
      const parallaxY = `${(currentRef.current.y - 0.5) * 24}px`

      container.style.setProperty('--hero-mouse-x', x)
      container.style.setProperty('--hero-mouse-y', y)
      container.style.setProperty('--hero-parallax-x', parallaxX)
      container.style.setProperty('--hero-parallax-y', parallaxY)

      frameRef.current = requestAnimationFrame(animate)
    }

    container.addEventListener('mousemove', onMove)
    container.addEventListener('mouseleave', onLeave)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener('mousemove', onMove)
      container.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frameRef.current)
      container.style.removeProperty('--hero-mouse-x')
      container.style.removeProperty('--hero-mouse-y')
      container.style.removeProperty('--hero-parallax-x')
      container.style.removeProperty('--hero-parallax-y')
    }
  }, [disabled])

  if (disabled) return null

  return (
    <div ref={containerRef} className="hero__cursor-fx" aria-hidden="true">
      <div className="hero__cursor-glow" />
      <div className="hero__cursor-ring" />
      <div className="hero__cursor-particles">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} className="hero__cursor-particle" style={{ '--i': index } as CSSProperties} />
        ))}
      </div>
      <div className="hero__cursor-grid" />
    </div>
  )
}
