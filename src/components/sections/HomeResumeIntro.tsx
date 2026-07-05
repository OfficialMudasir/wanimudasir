import { experience, resumeSummary } from '../../data/resume'
import { profile } from '../../data/profile'

const highlights = [
  {
    icon: 'bi-briefcase-fill',
    title: '6+ Years',
    text: 'Building enterprise web & software applications end-to-end.',
  },
  {
    icon: 'bi-building',
    title: 'Talentelgia',
    text: 'Senior Full Stack Software Engineer (L1) since 2021.',
  },
  {
    icon: 'bi-award-fill',
    title: 'AZ-204 Certified',
    text: 'Microsoft Certified Azure Developer Associate.',
  },
  {
    icon: 'bi-mortarboard-fill',
    title: 'MCA Graduate',
    text: "Master's in Computer Applications, Punjab University.",
  },
] as const

const coreStack = [
  'ASP.NET Core',
  'React',
  'C#',
  'Entity Framework',
  'Azure DevOps',
  'SQL Server',
  'REST APIs',
  'CI/CD',
] as const

export function HomeResumeIntro() {
  const currentRole = experience[0]
  const roleHighlights = currentRole.sections[0]?.bullets.slice(0, 3) ?? []

  return (
    <section id="home-intro" className="section home-intro" aria-labelledby="home-intro-title">
      <div className="container">
        <div className="home-intro__header fade-in">
          <p className="home-intro__eyebrow">Senior Full Stack Software Engineer</p>
          <h2 id="home-intro-title">Engineering scalable solutions that deliver real business value</h2>
          <p className="home-intro__summary">{resumeSummary.bio}</p>
        </div>

        <div className="home-intro__grid fade-in">
          {highlights.map((item) => (
            <article className="home-intro__card" key={item.title}>
              <span className="home-intro__card-icon" aria-hidden="true">
                <i className={`bi ${item.icon}`} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="home-intro__role fade-in">
          <div className="home-intro__role-content">
            <p className="home-intro__role-label">Current role</p>
            <h3>{currentRole.title}</h3>
            <p className="home-intro__role-meta">
              <i className="bi bi-geo-alt" aria-hidden="true" /> {currentRole.company} · {currentRole.period}
            </p>
            <ul className="home-intro__role-list">
              {roleHighlights.map((bullet) => (
                <li key={bullet}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="home-intro__stack">
            <p className="home-intro__stack-label">Core technologies</p>
            <ul className="home-intro__pills">
              {coreStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="home-intro__actions">
              <a href={profile.resumeUrl} download="Resume_Mudasir_Ahmad_Wani.pdf" className="btn btn--primary">
                <i className="bi bi-download" aria-hidden="true" /> Download Resume
              </a>
              <a href="#resume" className="btn btn--outline home-intro__btn-outline">
                View Full Resume
              </a>
            </div>
          </div>
        </div>

        <p className="home-intro__cta fade-in">
          Ready to collaborate?{' '}
          <a href="#contact">Let&apos;s discuss your next project</a> or explore my{' '}
          <a href="#portfolio">recent work</a>.
        </p>
      </div>
    </section>
  )
}
