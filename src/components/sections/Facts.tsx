import CountUp from 'react-countup'
import { facts, factsDescription } from '../../data/facts'
import { useInViewOnce } from '../../hooks/useScrollSpy'
import { Section, SectionTitle } from '../ui/Section'

function FactCard({ icon, end, label }: { icon: string; end: number; label: string }) {
  const { setRef, inView } = useInViewOnce()

  return (
    <div className="fact-card" ref={setRef}>
      <i className={`bi ${icon}`} />
      <span className="fact-card__number">
        {inView ? <CountUp end={end} duration={1.5} /> : '0'}
      </span>
      <p>
        <strong>{label}</strong>
      </p>
    </div>
  )
}

export function Facts() {
  return (
    <Section id="facts">
      <SectionTitle title="Facts" description={factsDescription} />
      <div className="facts__grid fade-in">
        {facts.map((fact) => (
          <FactCard key={fact.label} {...fact} />
        ))}
      </div>
    </Section>
  )
}
