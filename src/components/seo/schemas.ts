import type { Certification } from '../../data/certifications'
import type { Project } from '../../data/projects'
import { toAbsoluteAssetUrl } from '../../lib/images'
import { absoluteUrl, siteConfig } from '../../config/site'

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: absoluteUrl('/'),
    image: siteConfig.ogImage,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: siteConfig.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
      addressCountry: 'IN',
    },
    sameAs: siteConfig.sameAs,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} Portfolio`,
    url: absoluteUrl('/'),
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: toAbsoluteAssetUrl(project.thumbnail),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    description: project.sections[0]?.paragraphs?.[0] ?? project.title,
  }
}

export function certificationSchema(cert: Certification) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: cert.title,
    url: absoluteUrl(`/certifications/${cert.id}`),
    credentialCategory: cert.level,
    recognizedBy: {
      '@type': 'Organization',
      name: 'Microsoft',
    },
    dateCreated: cert.earnedOn,
  }
}
