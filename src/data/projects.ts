import { asset } from './profile'

export type ProjectCategory = 'web' | 'software'

export interface ProjectInfoItem {
  label: string
  value: string
  href?: string
}

export interface ProjectSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  subsections?: { heading: string; bullets: string[] }[]
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  thumbnail: string
  lightboxImage: string
  images: string[]
  info: ProjectInfoItem[]
  sections: ProjectSection[]
}

export const portfolioFilters = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software Applications' },
  { id: 'web', label: 'Web Applications' },
] as const

export const projects: Project[] = [
  {
    slug: 'drink-up-web',
    title: 'Drink-Up Web Application',
    category: 'web',
    thumbnail: asset('assets/img/Drinkup1.png'),
    lightboxImage: asset('assets/img/Drinkup1.png'),
    images: [
      asset('assets/img/Drinkup1.png'),
      asset('assets/img/Drinkup5.png'),
      asset('assets/img/Drinkup6.png'),
    ],
    info: [
      { label: 'Category', value: 'Web Application' },
      { label: 'Client', value: 'Drink Up Company' },
      { label: 'Project date', value: '01 March, 2020' },
      { label: 'Project URL', value: 'www.drinkup.com', href: 'https://www.drinkup.com/' },
    ],
    sections: [
      {
        heading: 'Drink to give back',
        paragraphs: [
          'The objective of this project is to give the ability to effectively reach, engage and obtain and maintain the drinks in a desktop and web environment while providing real-time communication interface between the software, hardware and the customer.',
          'The Drink Up solution manages all the customers in which they can order the drinks based on the sizes (small, medium, large and x-large).',
          'Automation of tasks is implemented for price regulation, billing, reports, returning and refunding process, providing real-time visibility to control drinking stocks and improve customer services.',
          'The system dispenses products to customers without staff involvement on a 24-hour basis.',
        ],
      },
    ],
  },
  {
    slug: 'drink-up-software',
    title: 'Drink-Up Software Application',
    category: 'software',
    thumbnail: asset('assets/img/DS1.webp'),
    lightboxImage: asset('assets/img/DS1.webp'),
    images: [
      asset('assets/img/DS1.webp'),
      asset('assets/img/DS3.png'),
    ],
    info: [
      { label: 'Category', value: 'Software Application' },
      { label: 'Client', value: 'Drink Up Company' },
      { label: 'Project date', value: '01 March, 2020' },
      { label: 'Project URL', value: 'www.drinkup.com', href: 'https://www.drinkup.com/' },
    ],
    sections: [
      {
        heading: 'Drink to give back',
        paragraphs: [
          'Desktop software solution for managing drink dispensing with real-time communication between software, hardware, and customers.',
          'Supports order management by drink size, automated billing, reporting, and inventory control for 24/7 unattended operation.',
        ],
      },
    ],
  },
  {
    slug: 'blinkay-integraparking',
    title: 'Blinkay-IntegraParking',
    category: 'web',
    thumbnail: asset('assets/img/b6.jpg'),
    lightboxImage: asset('assets/img/b5.png'),
    images: [
      asset('assets/img/b1.png'),
      asset('assets/img/b3.webp'),
      asset('assets/img/b4.jpg'),
    ],
    info: [
      { label: 'Category', value: 'Web Application' },
      { label: 'Client', value: 'Blinkay-Technologies' },
      { label: 'Project date', value: '01 March, 2020' },
      { label: 'Project URL', value: 'www.blinkay.com', href: 'https://blinkay.com/en/' },
    ],
    sections: [
      {
        paragraphs: [
          'Blinkay is an app-based platform for booking parking spaces. Users can search, find and book parking near their location with features like pay and claim, invoice generation, and more.',
        ],
      },
      {
        heading: 'Blinkay App',
        paragraphs: ['Pay the parking meter from your mobile. Use our app and forget about line-ups and missing coins.'],
      },
      {
        heading: 'Blinkay Ticket',
        paragraphs: ['App that facilitates plate verifications and the issuance of violations or invoices.'],
      },
      {
        heading: 'Blinkay Suite',
        paragraphs: [
          'A central platform that allows back office users to monitor all activities and create marketing campaigns for curbside and/or off-street parking services.',
        ],
      },
    ],
  },
  {
    slug: 'ticket-tracer',
    title: 'Parking Ticket Management System',
    category: 'software',
    thumbnail: asset('assets/img/tt1.png'),
    lightboxImage: asset('assets/img/tt2.png'),
    images: [
      asset('assets/img/tt1.png'),
      asset('assets/img/tt2.png'),
      asset('assets/img/tt4.png'),
    ],
    info: [
      { label: 'Category', value: 'Software Application' },
      { label: 'Client', value: 'Blinkay-Technologies (Ticket Tracer)' },
      { label: 'Project date', value: '01 January, 2022' },
      { label: 'Project URL', value: 'www.tickettracer.blinkay.com', href: 'https://tickettracer.blinkay.com/' },
    ],
    sections: [
      {
        heading: 'Parking Ticket Management System',
        paragraphs: [
          'Ticket management based on Ontario laws, supporting Bills 25 & 47 compliance. Administrative Monetary Penalty enforcement for parking and licensing infractions with 20+ years of client history in Ontario, Canada.',
          'Data is searched via Ticket Tracer Select windows resembling Excel spreadsheets. Users can filter tickets by criteria such as issue date and current event status.',
        ],
      },
    ],
  },
  {
    slug: 'syntaq-falcon',
    title: 'Syntaq Falcon Web-Admin Application',
    category: 'web',
    thumbnail: asset('assets/img/portfolio/Syntaq/SyntaQ.png'),
    lightboxImage: asset('assets/img/portfolio/Syntaq/SyntaQ.png'),
    images: [asset('assets/img/portfolio/Syntaq/SyntaQ.png')],
    info: [
      { label: 'Category', value: 'Web-Admin Application' },
      { label: 'Client', value: 'Syntaq Solutions' },
      { label: 'Project date', value: '10 October, 2022' },
      {
        label: 'Project URL',
        value: 'syntaq-falcon-preprod-test.azurewebsites.net',
        href: 'https://syntaq-falcon-preprod-test.azurewebsites.net/',
      },
    ],
    sections: [
      {
        heading: 'Introduction to SYNTAQ Falcon',
        paragraphs: [
          'SYNTAQ Falcon is a robust API-first online platform empowering organizations to automate complex documents and associated workflows. Designed to integrate with existing organizational structures, legacy systems, and data.',
          'The platform provides responsive support from needs-analysis through implementation and ongoing operations.',
        ],
      },
    ],
  },
  {
    slug: 'strategia',
    title: 'Strategia Web-Admin Application',
    category: 'web',
    thumbnail: asset('assets/img/portfolio/Strategia/Strategia.png'),
    lightboxImage: asset('assets/img/portfolio/Strategia/Strategia.png'),
    images: [asset('assets/img/portfolio/Strategia/Strategia.png')],
    info: [
      { label: 'Category', value: 'Web-Admin Application' },
      { label: 'Project date', value: '01 October, 2023' },
      {
        label: 'Project URL',
        value: 'straesanp.z8.web.core.windows.net',
        href: 'https://straesanp.z8.web.core.windows.net/',
      },
    ],
    sections: [
      {
        heading: 'Introduction to Strategia',
        paragraphs: [
          'Strategia is an innovative learning platform combining education and technology, providing an enriching and interactive learning experience with personalized learning journeys and live educational content.',
        ],
      },
    ],
  },
  {
    slug: 'orionstem',
    title: 'OrionSTEM',
    category: 'web',
    thumbnail: asset('assets/img/OrionSTEM0.png'),
    lightboxImage: asset('assets/img/OrionSTEM0.png'),
    images: [
      asset('assets/img/OrionSTEM0.png'),
      asset('assets/img/OrionSTEm1.png'),
      asset('assets/img/OrionSTEM2.png'),
    ],
    info: [
      { label: 'Category', value: 'Web Applications' },
      { label: 'Project scope', value: 'Multiple web applications' },
      { label: 'Project URL', value: 'orionstemschools.org', href: 'https://www.orionstemschools.org/' },
    ],
    sections: [
      {
        heading: 'OrionSTEM Schools',
        paragraphs: [
          'OrionSTEM Schools is a content-rich, high-traffic education website supporting discovery, admissions, and community engagement for a K–12 STEM school.',
          'The work focuses on clean information architecture, fast page experiences, and consistent UX across admissions, programs, outcomes, blogs/news, and contact flows.',
        ],
      },
    ],
  },
  {
    slug: 'alvarnet-cep',
    title: 'Alvarnet CEP',
    category: 'web',
    thumbnail: asset('assets/img/Alvarnet0.png'),
    lightboxImage: asset('assets/img/Alvarnet0.png'),
    images: [
      asset('assets/img/Alvarnet0.png'),
      asset('assets/img/Alvarnet1.png'),
      asset('assets/img/Alvarnet2.png'),
    ],
    info: [
      { label: 'Category', value: 'Web Application Portals' },
      { label: 'Status', value: 'Phase 1 completed' },
      { label: 'Admin UI', value: 'Azure Static Web App', href: 'https://brave-grass-0e12f800f.6.azurestaticapps.net' },
      { label: 'Client UI', value: 'Azure Static Web App', href: 'https://white-wave-0982f480f.1.azurestaticapps.net' },
      { label: 'API', value: 'Azure Web App', href: 'https://app-cep-dev-cc-01.azurewebsites.net/' },
    ],
    sections: [
      {
        heading: 'Alvarnet CEP (Client Experience Portal)',
      },
      {
        heading: 'Overview',
        paragraphs: [
          'The Alvarnet CEP is a modern, scalable, and secure multi-portal system designed to manage client organizations, users, and operational insights in a centralized manner.',
          'Built with a decoupled architecture — backend API and separate frontend portals for flexibility, maintainability, and scalability.',
        ],
      },
      {
        heading: 'Core objectives',
        bullets: [
          'Centralized platform for managing multiple client organizations (tenants)',
          'Secure user management and authentication',
          'Real-time insights and activity tracking',
          'Scalable modular architecture',
          'Future multi-tenant expansion and enterprise integrations',
        ],
      },
      {
        heading: 'Architecture overview',
        subsections: [
          {
            heading: 'Backend (CEP.API)',
            bullets: [
              'ASP.NET Core (.NET 9) with layered architecture',
              'RESTful APIs with RFC7807 ProblemDetails error handling',
              'Health endpoint at /ready',
            ],
          },
          {
            heading: 'Admin Portal (CEP.UI.Admin)',
            bullets: [
              'Organization and user management',
              'Dashboard insights and activity tracking',
            ],
          },
          {
            heading: 'Client Portal (CEP.UI.Client)',
            bullets: [
              'Organization-specific data access',
              'Settings, documentation, and skeleton loaders for UX',
            ],
          },
        ],
      },
      {
        heading: 'Key features',
        bullets: [
          'Multi-tenant ready design',
          'RBAC with secure authentication flows',
          'Activity monitoring and auditing',
          'ProblemDetails error responses with traceId',
          'Skeleton screens and clear validation feedback',
        ],
      },
      {
        heading: 'Testing & quality assurance',
        bullets: [
          'Unit testing with xUnit, Moq, and FluentAssertions',
          'Planned E2E automation with Cypress',
          'CI/CD integration with Azure DevOps',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'The Alvarnet CEP platform is a robust, extensible, and enterprise-ready solution designed to streamline organization and user management across multiple clients.',
        ],
      },
    ],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
