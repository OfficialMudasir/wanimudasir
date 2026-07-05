export interface EducationItem {
  title: string
  period: string
  institution: string
  description: string
}

export interface ExperienceSection {
  heading: string
  bullets: string[]
}

export interface ExperienceItem {
  title: string
  period: string
  company: string
  sections: ExperienceSection[]
}

export const education: EducationItem[] = [
  {
    title: 'Master of Computer Science and Applications',
    period: '2018 - 2021',
    institution: 'Punjab University, Chandigarh, India',
    description:
      'Specialized in programming and modern web technologies. Graduated with 73% marks and completed a final project on DrinkUp.',
  },
  {
    title: 'Bachelor of Computer Science and Applications',
    period: '2015 - 2018',
    institution: 'Post Graduate Govt College, Sector-46, Chandigarh',
    description:
      'Strong foundation in computer science principles and programming. Graduated with 61% marks and completed a final project on an Ecommerce Website.',
  },
  {
    title: '12th Standard (Higher Secondary)',
    period: '2014 - 2015',
    institution: 'Government Higher Secondary School Soaf Shali',
    description:
      'Specialized in Computer Arts stream with Computer Science. Graduated with 78% marks.',
  },
  {
    title: '10th Standard (Matriculation)',
    period: '2013 - 2014',
    institution: 'Government Higher Secondary School Soaf Shali',
    description:
      'Studied English, mathematics, science, social studies, and Urdu. Graduated with 54% marks.',
  },
]

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Full Stack Software Engineer (L1)',
    period: '2021 - Present',
    company: 'Talentelgia Technologies, Mohali, India',
    sections: [
      {
        heading: 'Developing and maintaining web applications',
        bullets: [
          'Develop and maintain web applications using front-end and back-end technologies.',
          'Write clean, efficient, and reusable code that is easy to maintain and scale.',
          'Ensure applications are user-friendly, visually appealing, and responsive across all devices.',
          'Troubleshoot and debug issues during development and in production.',
          'Collaborate with designers, product managers, and developers to meet requirements and deadlines.',
        ],
      },
      {
        heading: 'Managing databases and server-side code',
        bullets: [
          'Design and implement efficient database schemas.',
          'Write server-side code for databases, APIs, and third-party services.',
          'Ensure server-side code is secure, reliable, and scalable.',
          'Implement caching strategies and monitor performance.',
        ],
      },
      {
        heading: 'Testing and deployment',
        bullets: [
          'Write automated tests and ensure full testing before deployment.',
          'Deploy applications using modern deployment tools and strategies.',
          'Monitor application performance and integrate new features with high quality.',
        ],
      },
      {
        heading: 'Code reviews and mentoring',
        bullets: [
          'Participate in code reviews and provide constructive feedback.',
          'Mentor junior developers and share knowledge and expertise.',
          'Stay current with new technologies and frameworks.',
        ],
      },
    ],
  },
]

export const resumeSummary = {
  name: 'Mudasir Ahmad Wani',
  bio: `A highly skilled Full Stack Software Engineer with 6+ years of experience in designing, developing, and maintaining web applications. Proficient in Asp.Net Core with MVC, Entity Framework Core, ReactJS, JavaScript, HTML5, CSS3, CI/CD with Azure DevOps, Unit Testing with xUnit, and project management tools. Passionate about writing clean, efficient, and scalable code.`,
  contact: ['Keharpora Anantnag, Jammu & Kashmir', '(788) 954-8173', 'wanimudasir312@gmail.com'],
}
