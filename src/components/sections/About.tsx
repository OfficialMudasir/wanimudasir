import { profile } from '../../data/profile'
import { Section, SectionTitle } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <SectionTitle title="About" description={profile.about.intro} />
      <p className="about__intro-secondary">{profile.about.secondary}</p>

      <div className="about__grid fade-in">
        <img src={profile.avatar} alt={profile.name} className="about__image" />
        <div>
          <h3>Full Stack &amp; Software Developer.</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{profile.about.tagline}</p>
          <ul className="about__details">
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Website:</strong> {profile.website}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Phone:</strong> {profile.phone}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>City:</strong> {profile.city}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Age:</strong> {profile.age}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Degree:</strong> {profile.degree}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Email:</strong> {profile.email}
              </span>
            </li>
            <li>
              <i className="bi bi-chevron-right" />
              <span>
                <strong>Freelance:</strong> {profile.freelance}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
