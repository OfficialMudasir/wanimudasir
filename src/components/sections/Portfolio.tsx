import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioFilters, projects } from '../../data/projects'
import type { ProjectCategory } from '../../data/projects'
import { Section, SectionTitle } from '../ui/Section'

type FilterId = 'all' | ProjectCategory

const categoryLabel: Record<ProjectCategory, string> = {
  web: 'Web App',
  software: 'Software',
}

function PortfolioCard({
  slug,
  title,
  category,
  thumbnail,
}: {
  slug: string
  title: string
  category: ProjectCategory
  thumbnail: string
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link to={`/projects/${slug}`} className="portfolio-card" aria-label={`View project: ${title}`}>
      <div className="portfolio-card__image-wrap">
        {!imgError ? (
          <img
            src={thumbnail}
            alt={title}
            className="portfolio-card__image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="portfolio-card__placeholder">
            <i className="bi bi-laptop" />
          </div>
        )}
        <span className="portfolio-card__badge">{categoryLabel[category]}</span>
        <div className="portfolio-card__overlay">
          <span className="portfolio-card__cta">
            View Project <i className="bi bi-arrow-right" />
          </span>
        </div>
      </div>
      <div className="portfolio-card__body">
        <h3 className="portfolio-card__title">{title}</h3>
      </div>
    </Link>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<FilterId>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="portfolio" muted>
      <SectionTitle
        title="Portfolio"
        description="A collection of my work showcasing skills and experience across web design, development, and enterprise applications."
      />

      <ul className="portfolio-filters fade-in" role="list" aria-label="Project categories">
        {portfolioFilters.map((f) => (
          <li key={f.id}>
            <button
              type="button"
              className={filter === f.id ? 'active' : ''}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="portfolio-grid fade-in">
        {filtered.map((project) => (
          <PortfolioCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            category={project.category}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="portfolio-empty">No projects in this category yet.</p>
      )}
    </Section>
  )
}
