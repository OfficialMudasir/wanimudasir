import { useState } from 'react'
import { microsoftLearnProfileUrl } from '../../data/certifications'
import { useAchievements } from '../../hooks/useAchievements'
import type { AchievementFilter } from '../../types/achievements'
import { AchievementsGrid } from './AchievementsGrid'

interface AchievementsSectionProps {
  examCode?: string
}

export function AchievementsSection({ examCode }: AchievementsSectionProps) {
  const { loading, error, trophyCount, badgeCount, totalCount, filterAchievements } =
    useAchievements()
  const [filter, setFilter] = useState<AchievementFilter>('all')

  const filtered = filterAchievements(filter)

  return (
    <div className="cert-detail-trophies">
      <div className="cert-detail-trophies__header">
        <div>
          <h2>
            <i className="bi bi-trophy" /> Microsoft Learn Achievements
          </h2>
          <p>
            {loading
              ? 'Loading badges and trophies from Microsoft Learn…'
              : `${badgeCount} badges and ${trophyCount} learning path trophies (${totalCount} total)${examCode ? ` related to ${examCode} preparation` : ''}.`}
          </p>
        </div>
        <a
          href={microsoftLearnProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          View on Microsoft Learn <i className="bi bi-box-arrow-up-right" />
        </a>
      </div>

      <div className="cert-tabs achievements-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'all'}
          className={`cert-tabs__btn ${filter === 'all' ? 'cert-tabs__btn--active' : ''}`}
          onClick={() => setFilter('all')}
          disabled={loading}
        >
          All
          {!loading && <span className="cert-tabs__count">{totalCount}</span>}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'trophies'}
          className={`cert-tabs__btn ${filter === 'trophies' ? 'cert-tabs__btn--active' : ''}`}
          onClick={() => setFilter('trophies')}
          disabled={loading}
        >
          <i className="bi bi-trophy" /> Trophies
          {!loading && <span className="cert-tabs__count">{trophyCount}</span>}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'badges'}
          className={`cert-tabs__btn ${filter === 'badges' ? 'cert-tabs__btn--active' : ''}`}
          onClick={() => setFilter('badges')}
          disabled={loading}
        >
          <i className="bi bi-award" /> Badges
          {!loading && <span className="cert-tabs__count">{badgeCount}</span>}
        </button>
      </div>

      {loading && (
        <div className="achievements-loading">
          <div className="achievements-loading__spinner" />
          <p>Fetching achievements from Microsoft Learn…</p>
        </div>
      )}

      {error && (
        <div className="achievements-error">
          <p>{error}</p>
          <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div role="tabpanel" className="fade-in">
          <AchievementsGrid achievements={filtered} />
        </div>
      )}
    </div>
  )
}
