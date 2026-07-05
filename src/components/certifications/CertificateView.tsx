import type { Certification } from '../../data/certifications'

function MicrosoftShield() {
  return (
    <div className="ms-shield" aria-hidden="true">
      <div className="ms-shield__inner">
        <span className="ms-shield__brand">Microsoft</span>
        <span className="ms-shield__level">Certified</span>
        <span className="ms-shield__type">ASSOCIATE</span>
        <span className="ms-shield__stars">★★</span>
      </div>
    </div>
  )
}

export function CertificateView({ cert }: { cert: Certification }) {
  return (
    <div className="cert-view">
      <header className="cert-view__header">
        <h1 className="cert-view__title">{cert.title}</h1>
        <p className="cert-view__issued">
          Issued by <strong>{cert.issuer}</strong> on {cert.earnedOn} to:
        </p>
        <div className="cert-view__recipient">
          <span className="cert-view__avatar">{cert.recipient.charAt(0)}</span>
          <span className="cert-view__name">{cert.recipient}</span>
        </div>
      </header>

      <div className="cert-view__body">
        <div className="cert-view__frame">
          <div className="cert-certificate">
            <div className="cert-certificate__ms-logo">
              <span className="cert-certificate__sq cert-certificate__sq--r" />
              <span className="cert-certificate__sq cert-certificate__sq--g" />
              <span className="cert-certificate__sq cert-certificate__sq--b" />
              <span className="cert-certificate__sq cert-certificate__sq--y" />
            </div>

            <p className="cert-certificate__name">{cert.recipient}</p>
            <p className="cert-certificate__subtitle">has successfully passed all requirements for</p>
            <p className="cert-certificate__title">{cert.title}</p>

            <div className="cert-certificate__footer">
              <div className="cert-certificate__meta">
                <p>Credential ID: {cert.credentialId}</p>
                <p>Certification number: {cert.certificationNumber}</p>
                <p>Earned on: {cert.earnedOn}</p>
                <p>Expires on: {cert.expiresOn}</p>
                {cert.verifiable && (
                  <span className="cert-pill cert-pill--verify">
                    <i className="bi bi-check-circle-fill" /> Online Verifiable
                  </span>
                )}
              </div>

              <MicrosoftShield />

              <div className="cert-certificate__signature">
                <div className="cert-certificate__sig-line" />
                <p>Satya Nadella</p>
                <p className="cert-certificate__sig-role">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="cert-sidebar">
          <MicrosoftShield />

          <div className="cert-sidebar__badges">
            <span className={`cert-pill cert-pill--${cert.status.toLowerCase()}`}>
              {cert.status}
            </span>
            {cert.verifiable && (
              <span className="cert-pill cert-pill--verify">
                <i className="bi bi-check-circle-fill" /> Online Verifiable
              </span>
            )}
          </div>

          <dl className="cert-sidebar__details">
            <div>
              <dt>Credential ID</dt>
              <dd>{cert.credentialId}</dd>
            </div>
            <div>
              <dt>Certification number</dt>
              <dd>{cert.certificationNumber}</dd>
            </div>
            <div>
              <dt>Earned on</dt>
              <dd>{cert.earnedOn}</dd>
            </div>
            <div>
              <dt>Expires on</dt>
              <dd>{cert.expiresOn}</dd>
            </div>
            <div>
              <dt>Exam</dt>
              <dd>{cert.examCode}</dd>
            </div>
          </dl>

          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-sidebar__link"
          >
            View certification page <i className="bi bi-box-arrow-up-right" />
          </a>
        </aside>
      </div>

      <section className="cert-skills">
        <h3>Skills measured</h3>
        <ul>
          {cert.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
