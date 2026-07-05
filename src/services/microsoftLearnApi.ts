import { MS_LEARN_ACHIEVEMENTS_API, MS_LEARN_BASE_URL } from '../config/microsoftLearn'
import type { MsAchievementsResponse } from '../types/achievements'

export async function fetchAchievements(): Promise<MsAchievementsResponse> {
  const response = await fetch(MS_LEARN_ACHIEVEMENTS_API)

  if (!response.ok) {
    throw new Error(`Failed to load Microsoft Learn achievements (${response.status})`)
  }

  return response.json() as Promise<MsAchievementsResponse>
}

export function getAchievementImageUrl(imageUrl: string) {
  if (imageUrl.startsWith('http')) return imageUrl
  return `${MS_LEARN_BASE_URL}${imageUrl}`
}

export function getAchievementPageUrl(url?: string) {
  if (!url) return undefined
  if (url.startsWith('http')) return url
  return `${MS_LEARN_BASE_URL}${url}`
}

export function formatAchievementDate(grantedOn: string) {
  return new Date(grantedOn).toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getAchievementLabel(category: string) {
  return category === 'learningpaths' ? 'Trophy' : 'Badge'
}
