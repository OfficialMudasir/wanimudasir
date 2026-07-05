import type { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  description?: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title fade-in">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

interface SectionProps {
  id: string
  className?: string
  muted?: boolean
  children: ReactNode
}

export function Section({ id, className = '', muted, children }: SectionProps) {
  return (
    <section id={id} className={`section ${muted ? 'section--muted' : ''} ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  )
}
