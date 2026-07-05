import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectMeta, PAGE_META } from '../config/seo'
import { breadcrumbSchema, projectSchema } from '../components/seo/schemas'
import { PageSeo } from '../components/seo/PageSeo'
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
      <>
        <PageSeo meta={PAGE_META.portfolio} />
        <div className="thanks-page" role="alert">
          <div className="thanks-card">
            <h1>Project not found</h1>
            <p>The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link to="/portfolio" className="btn btn--primary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </>
    )
  }

  const description = project.sections[0]?.paragraphs?.[0] ?? project.title
  const meta = projectMeta(project.title, description, project.slug, project.thumbnail)

  return (
    <>
      <PageSeo
        meta={meta}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
          projectSchema(project),
        ]}
      />
      <article className="project-page">
        <header className="project-hero">
          <div className="container project-hero__inner">
            <Link to="/portfolio" className="project-hero__back">
              <i className="bi bi-arrow-left" aria-hidden="true" /> Back to Portfolio
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

            <aside className="project-page__sidebar" aria-label="Project information">
              <div className="project-info-card">
                <h2>
                  <i className="bi bi-info-circle" aria-hidden="true" /> Project Info
                </h2>
                <dl className="project-info-card__list">
                  {project.info.map((item) => (
                    <div className="project-info-card__row" key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.value} <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
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
                {project.sections.map((section) => (
                  <section
                    className="project-section"
                    key={section.heading ?? section.paragraphs?.[0]?.slice(0, 48) ?? project.slug}
                  >
                    {section.heading && <h2>{section.heading}</h2>}
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul className="project-section__list">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {section.subsections?.map((sub) => (
                      <div className="project-subsection" key={sub.heading}>
                        <h3>{sub.heading}</h3>
                        <ul className="project-section__list">
                          {sub.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
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
    </>
  )
}
