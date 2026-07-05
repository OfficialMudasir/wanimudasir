import { certifications, microsoftLearnProfileUrl } from '../../data/certifications'
import { CertificationCard } from '../certifications/CertificationCard'
import { useAchievements } from '../../hooks/useAchievements'
import { Section, SectionTitle } from '../ui/Section'

export function CertificationsSection() {
  const { badgeCount, trophyCount, totalCount, loading } = useAchievements()

  return (
    <Section id="certifications" muted className="certifications-page">
      <SectionTitle
        title="Certifications"
        description="Microsoft Azure credentials and completed Microsoft Learn learning paths."
      />

      <div className="cert-list-header fade-in">
        <p className="cert-list-header__count">
          <i className="bi bi-award" /> {certifications.length} certification
          {certifications.length !== 1 ? 's' : ''} earned
          {!loading && (
            <span className="cert-list-header__sub">
              · {badgeCount} badges · {trophyCount} trophies ({totalCount} total)
            </span>
          )}
        </p>
        <a
          href={microsoftLearnProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-list-header__link"
        >
          View all on Microsoft Learn <i className="bi bi-box-arrow-up-right" />
        </a>
      </div>

      <div className="cert-grid fade-in">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            badgeCount={badgeCount}
            trophyCount={trophyCount}
            loading={loading}
          />
        ))}
      </div>
    </Section>
  )
}
