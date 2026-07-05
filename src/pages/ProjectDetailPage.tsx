import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { ProjectGallery } from '../components/portfolio/ProjectGallery'

const categoryLabel = {
  web: 'Web Application',
  software: 'Software Application',
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="thanks-page">
        <div className="thanks-card">
          <h1>Project not found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/" className="btn btn--primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="project-page">
      <header className="project-hero">
        <div className="container project-hero__inner">
          <Link to="/#portfolio" className="project-hero__back">
            <i className="bi bi-arrow-left" /> Back to Portfolio
          </Link>
          <span className="project-hero__badge">{categoryLabel[project.category]}</span>
          <h1 className="project-hero__title">{project.title}</h1>
        </div>
      </header>

      <div className="container project-page__body">
        <div className="project-page__grid">
          <div className="project-page__gallery-col">
            <ProjectGallery images={project.images} title={project.title} />
          </div>

          <aside className="project-page__sidebar">
            <div className="project-info-card">
              <h3>
                <i className="bi bi-info-circle" /> Project Info
              </h3>
              <dl className="project-info-card__list">
                {project.info.map((item) => (
                  <div className="project-info-card__row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.value} <i className="bi bi-box-arrow-up-right" />
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="project-page__content">
            <div className="project-content-card">
              {project.sections.map((section, i) => (
                <section className="project-section" key={i}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="project-section__list">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {section.subsections?.map((sub) => (
                    <div className="project-subsection" key={sub.heading}>
                      <h4>{sub.heading}</h4>
                      <ul className="project-section__list">
                        {sub.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
