export const env = {
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? '',
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID ?? '',
  isProd: import.meta.env.PROD,
} as const

export function hasAnalytics() {
  return env.isProd && Boolean(env.gaMeasurementId || env.clarityProjectId)
}
