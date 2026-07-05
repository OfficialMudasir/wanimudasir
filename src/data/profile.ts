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
    instagram: 'https://www.instagram.com/official_mudasir.786/',
    skype: 'https://go.skype.com/sfw',
    linkedin: 'https://www.linkedin.com/in/wani-mudasir-9298891a7/',
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
  { id: 'hero', label: 'Home', icon: 'bx-home' },
  { id: 'about', label: 'About', icon: 'bx-user' },
  { id: 'facts', label: 'Facts', icon: 'bx-bar-chart-alt-2' },
  { id: 'skills', label: 'Skills', icon: 'bx-code-alt' },
  { id: 'resume', label: 'Resume', icon: 'bx-file-blank' },
  { id: 'portfolio', label: 'Portfolio', icon: 'bx-book-content' },
  { id: 'services', label: 'Services', icon: 'bx-server' },
  { id: 'testimonials', label: 'Testimonials', icon: 'bx-chat' },
  { id: 'contact', label: 'Contact', icon: 'bx-envelope' },
]
