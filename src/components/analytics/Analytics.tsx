import { useEffect } from 'react'
import { env } from '../../config/env'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

function loadGoogleAnalytics(measurementId: string) {
  if (document.getElementById('ga4-script')) return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { anonymize_ip: true })

  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

function loadMicrosoftClarity(projectId: string) {
  if (document.getElementById('clarity-script')) return

  const script = document.createElement('script')
  script.id = 'clarity-script'
  script.async = true
  script.text = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${projectId}");
  `
  document.head.appendChild(script)
}

/** Loads GA4 and Microsoft Clarity when env IDs are set (production only). */
export function Analytics() {
  useEffect(() => {
    if (!env.isProd) return

    if (env.gaMeasurementId) {
      loadGoogleAnalytics(env.gaMeasurementId)
    }

    if (env.clarityProjectId) {
      loadMicrosoftClarity(env.clarityProjectId)
    }
  }, [])

  return null
}
