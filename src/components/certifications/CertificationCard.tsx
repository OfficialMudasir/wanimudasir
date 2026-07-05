import { Link } from 'react-router-dom'
import type { Certification } from '../../data/certifications'

interface CertificationCardProps {
  cert: Certification
  badgeCount?: number
  trophyCount?: number
  loading?: boolean
}

export function CertificationCard({ cert, badgeCount, trophyCount, loading }: CertificationCardProps) {
  return (
    <Link to={`/certifications/${cert.id}`} className="cert-card">
      <div className="cert-card__preview">
        <div className="cert-card__pattern" />
        <div className="cert-card__shield">
          <span className="cert-card__shield-ms">Microsoft</span>
          <span className="cert-card__shield-level">{cert.level}</span>
          <span className="cert-card__shield-stars">★★</span>
        </div>
        <span className="cert-card__exam">{cert.examCode}</span>
        <span className={`cert-card__status cert-card__status--${cert.status.toLowerCase()}`}>
          {cert.status}
        </span>
        <div className="cert-card__overlay">
          <span className="cert-card__cta">
            View Certificate <i className="bi bi-arrow-right" />
          </span>
        </div>
      </div>
      <div className="cert-card__body">
        <h3 className="cert-card__title">{cert.shortTitle}</h3>
        <p className="cert-card__meta">
          <i className="bi bi-calendar3" /> Earned {cert.earnedOn}
        </p>
        <p className="cert-card__trophies">
          <i className="bi bi-award" />{' '}
          {loading
            ? 'Loading Microsoft Learn achievements…'
            : `${badgeCount ?? 0} badges · ${trophyCount ?? 0} trophies`}
        </p>
      </div>
    </Link>
  )
}
