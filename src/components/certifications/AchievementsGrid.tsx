import {
  formatAchievementDate,
  getAchievementImageUrl,
  getAchievementLabel,
  getAchievementPageUrl,
} from '../../services/microsoftLearnApi'
import type { MsAchievement } from '../../types/achievements'

function AchievementCard({ achievement }: { achievement: MsAchievement }) {
  const label = getAchievementLabel(achievement.category)
  const pageUrl = getAchievementPageUrl(achievement.url)
  const imageUrl = getAchievementImageUrl(achievement.imageUrl)

  const content = (
    <>
      <div className="badge-card__icon-wrap">
        <img src={imageUrl} alt="" className="badge-card__ms-icon" loading="lazy" />
      </div>
      <span className="badge-card__label">{label}</span>
      <h3 className="badge-card__title">{achievement.title}</h3>
      <p className="badge-card__date">
        Completed on {formatAchievementDate(achievement.grantedOn)}
      </p>
      {achievement.category === 'learningpaths' ? (
        <span className="badge-card__status">
          <i className="bi bi-check2-square" /> All module assessments passed
        </span>
      ) : (
        <span className="badge-card__status badge-card__status--badge">
          <i className="bi bi-patch-check" /> Module completed
          {achievement.verified && ' · Verified'}
        </span>
      )}
    </>
  )

  if (pageUrl) {
    return (
      <a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="badge-card badge-card--link"
      >
        {content}
      </a>
    )
  }

  return <article className="badge-card">{content}</article>
}

export function AchievementsGrid({ achievements }: { achievements: MsAchievement[] }) {
  if (achievements.length === 0) {
    return <p className="achievements-empty">No achievements in this category.</p>
  }

  return (
    <div className="badges-grid">
      {achievements.map((achievement) => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </div>
  )
}
