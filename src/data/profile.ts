export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Mudasir Ibrahim',
  fullName: 'Mudasir Ahmad Wani',
  title: 'Senior Software Engineer and Freelancer',
  typedRoles: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'Freelancer',
    '.NET & React Specialist',
  ],
  avatar: asset('assets/img/mudasir.jpg'),
  heroBackground: asset('assets/img/p11.jpg'),
  heroBackgroundGifs: [
    asset('assets/img/gifs/Gihiy1.gif'),
    asset('assets/img/gifs/881563d6444b370fa4ceea0c3183bb4c.gif'),
    asset('assets/img/gifs/881563d6444b370fa4ceea0c3183bb4c (1).gif'),
  ],
  website: 'www.officialmudasir.com',
  phone: '+91-7889548173',
  city: 'Anantnag, Jammu and Kashmir',
  age: '25',
  degree: "Master's of Computer Applications",
  email: 'wanimudasir312@gmail.com',
  freelance: 'Available',
  resumeUrl: asset('assets/img/portfolio/Resume/Resume_Mudasir.pdf'),
  social: {
    twitter: 'https://twitter.com/home?lang=en',
    facebook: 'https://www.facebook.com/wani.mudasir.1004',
    instagram: 'https://www.instagram.com/mudasir.ibrahim_/',
    skype: 'https://go.skype.com/sfw',
    linkedin: 'https://www.linkedin.com/in/mudasir-ibrahim-9298891a7/',
  },
  about: {
    intro: `Solution driven web developer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction. With 6+ years of practical exposure and hands-on experience, I have played significant role in nurturing and honing development/logical skills in ASP.NET and .NET Core.`,
    secondary: `As a full stack seasoned developer, I have experience in using ASP.NET MVC with MSSQL and MongoDB, Singleton design patterns, object oriented programming (OOPs) principles, code first and database first approaches, Entity framework, reporting tools, Telerik and Kendo UI tools, Azure DevOPS, ReactJS, Angular, HTML5, CSS3, JQuery to develop enterprise level applications using .NET framework.`,
    tagline: `Hello there! My name is Mudasir Ahmad Wani, and I'm a full stack software engineer with 6+ years of experience in the field. I am passionate about creating efficient, scalable, and user-friendly applications that solve real-world problems.`,
  },
  contact: {
    address: 'Keharpora Kokernag Anantnag, J&K, 192202',
    email: 'wanimudasir312@gmail.com',
    phone: '+91 78895 48173',
    mapUrl: 'https://maps.google.com/maps?q=Kehar%20pora&t=k&z=8&ie=UTF8&iwloc=&output=embed',
  },
}

export const navItems = [
  { label: 'Home', icon: 'bx-home', path: '/' },
  { label: 'About', icon: 'bx-user', path: '/about' },
  { label: 'Facts', icon: 'bx-bar-chart-alt-2', path: '/facts' },
  { label: 'Skills', icon: 'bx-code-alt', path: '/skills' },
  { label: 'Resume', icon: 'bx-file-blank', path: '/resume' },
  { label: 'Certifications', icon: 'bx-certification', path: '/certifications' },
  { label: 'Portfolio', icon: 'bx-book-content', path: '/portfolio' },
  { label: 'Services', icon: 'bx-server', path: '/services' },
  { label: 'Testimonials', icon: 'bx-chat', path: '/testimonials' },
  { label: 'Contact', icon: 'bx-envelope', path: '/contact' },
] as const
