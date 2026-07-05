import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
      <div className="thanks-page">
        <div className="thanks-card">
          <h1>Certification not found</h1>
          <p>The certification you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/certifications" className="btn btn--primary">
            Back to Certifications
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs title="Certification Details" current={cert.shortTitle} />
      <section className="cert-detail-page">
        <div className="container">
          <Link to="/certifications" className="cert-detail-page__back">
            <i className="bi bi-arrow-left" /> Back to Certifications
          </Link>

          <CertificateView cert={cert} />

          <AchievementsSection examCode={cert.examCode} />
        </div>
      </section>
    </>
  )
}
