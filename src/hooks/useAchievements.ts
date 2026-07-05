import { useEffect, useState } from 'react'
import { fetchAchievements } from '../services/microsoftLearnApi'
import type { AchievementFilter, MsAchievement } from '../types/achievements'

export function useAchievements() {
  const [achievements, setAchievements] = useState<MsAchievement[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchAchievements()
      .then((data) => {
        if (cancelled) return
        const sorted = [...data.achievements].sort(
          (a, b) => new Date(b.grantedOn).getTime() - new Date(a.grantedOn).getTime(),
        )
        setAchievements(sorted)
        setTotalCount(data.totalCount)
        setError(null)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load achievements')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const trophies = achievements.filter((a) => a.category === 'learningpaths')
  const badges = achievements.filter((a) => a.category === 'modules')

  const filterAchievements = (filter: AchievementFilter) => {
    if (filter === 'trophies') return trophies
    if (filter === 'badges') return badges
    return achievements
  }

  return {
    achievements,
    trophies,
    badges,
    totalCount,
    trophyCount: trophies.length,
    badgeCount: badges.length,
    loading,
    error,
    filterAchievements,
  }
}
