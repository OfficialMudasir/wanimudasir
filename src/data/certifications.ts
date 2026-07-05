export const microsoftLearnProfileUrl =
  'https://learn.microsoft.com/en-us/users/mudasirahmadwani-6551/?tab=credentials-tab'

export interface Certification {
  id: string
  title: string
  shortTitle: string
  issuer: string
  recipient: string
  credentialId: string
  certificationNumber: string
  earnedOn: string
  expiresOn: string
  status: 'Active' | 'Expired'
  verifiable: boolean
  credentialUrl: string
  skills: string[]
  examCode: string
  level: 'Associate' | 'Expert' | 'Fundamentals'
}

export const certifications: Certification[] = [
  {
    id: 'az-204',
    title: 'Microsoft Certified: Azure Developer Associate',
    shortTitle: 'Azure Developer Associate',
    issuer: 'Microsoft',
    recipient: 'Mudasir Ahmad Wani',
    credentialId: 'A820001E6D8AF6EF',
    certificationNumber: '575E1M-FA3D4B',
    earnedOn: 'August 2, 2023',
    expiresOn: 'August 3, 2027',
    status: 'Active',
    verifiable: true,
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/mudasirahmadwani-6551/credentials/a820001e6d8af6ef',
    examCode: 'AZ-204',
    level: 'Associate',
    skills: [
      'Develop Azure compute solutions',
      'Develop for Azure storage',
      'Implement Azure security',
      'Monitor, troubleshoot, and optimize Azure solutions',
      'Connect to and consume Azure services and third-party services',
    ],
  },
]

export const getCertificationById = (id: string) => certifications.find((c) => c.id === id)
