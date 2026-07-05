export type AchievementCategory = 'learningpaths' | 'modules' | string

export interface MsAchievement {
  category: AchievementCategory
  typeId: string
  userId: string
  id: string
  title: string
  imageUrl: string
  locale: string
  verified: boolean
  source: string
  grantedOn: string
  url?: string
  milestoneEligible?: boolean
  version?: number
}

export interface MsAchievementsResponse {
  achievements: MsAchievement[]
  totalCount: number
}

export type AchievementFilter = 'all' | 'trophies' | 'badges'
