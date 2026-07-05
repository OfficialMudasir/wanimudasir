import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { certificationMeta, PAGE_META } from '../config/seo'
import { breadcrumbSchema, certificationSchema } from '../components/seo/schemas'
import { PageSeo } from '../components/seo/PageSeo'
import { getCertificationById } from '../data/certifications'
import { AchievementsSection } from '../components/certifications/AchievementsSection'
import { CertificateView } from '../components/certifications/CertificateView'
import { Breadcrumbs } from '../components/layout/Breadcrumbs'

export function CertificationDetailPage() {
  const { id } = useParams<{ id: string }>()
  const cert = id ? getCertificationById(id) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!cert) {
    return (
      <>
        <PageSeo meta={PAGE_META.certifications} />
        <div className="thanks-page" role="alert">
          <div className="thanks-card">
            <h1>Certification not found</h1>
            <p>The certification you&apos;re looking for doesn&apos;t exist.</p>
            <Link to="/certifications" className="btn btn--primary">
              Back to Certifications
            </Link>
          </div>
        </div>
      </>
    )
  }

  const meta = certificationMeta(
    cert.title,
    `${cert.title} — earned ${cert.earnedOn}. View credential details and Microsoft Learn achievements.`,
    cert.id,
  )

  return (
    <>
      <PageSeo
        meta={meta}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Certifications', path: '/certifications' },
            { name: cert.shortTitle, path: `/certifications/${cert.id}` },
          ]),
          certificationSchema(cert),
        ]}
      />
      <Breadcrumbs title="Certification Details" current={cert.shortTitle} />
      <section className="cert-detail-page">
        <div className="container">
          <Link to="/certifications" className="cert-detail-page__back">
            <i className="bi bi-arrow-left" aria-hidden="true" /> Back to Certifications
          </Link>

          <CertificateView cert={cert} />

          <AchievementsSection examCode={cert.examCode} />
        </div>
      </section>
    </>
  )
}
