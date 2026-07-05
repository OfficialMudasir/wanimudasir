import { education, experience, resumeSummary } from '../../data/resume'
import { profile } from '../../data/profile'
import { Section, SectionTitle } from '../ui/Section'

export function Resume() {
  return (
    <Section id="resume">
      <SectionTitle
        title="Resume"
        description="Solution driven web developer with 6+ years of hands-on experience in ASP.NET and .NET Core, building enterprise-level applications."
      />

      <div className="resume__download fade-in">
        <a href={profile.resumeUrl} download="Resume_Mudasir_Ahmad_Wani.pdf" className="btn btn--primary">
          <i className="bi bi-arrow-down-short" style={{ fontSize: '1.5rem' }} />
          Download My Resume
        </a>
      </div>

      <div className="resume__grid fade-in">
        <div>
          <h3 className="resume__title">Summary</h3>
          <div className="resume-item">
            <h4>{resumeSummary.name}</h4>
            <p>
              <em>{resumeSummary.bio}</em>
            </p>
            <ul>
              {resumeSummary.contact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <h3 className="resume__title">Education</h3>
          {education.map((item) => (
            <div className="resume-item" key={item.title}>
              <h4>{item.title}</h4>
              <h5>{item.period}</h5>
              <p>
                <em>{item.institution}</em>
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="resume__title">Professional Experience</h3>
          {experience.map((job) => (
            <div className="resume-item" key={job.title}>
              <h4>{job.title}</h4>
              <h5>{job.period}</h5>
              <p>
                <em>{job.company}</em>
              </p>
              {job.sections.map((section) => (
                <div key={section.heading}>
                  <h5 style={{ marginTop: '1rem' }}>{section.heading}</h5>
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
