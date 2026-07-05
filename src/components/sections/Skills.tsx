import { skills, skillsDescription } from '../../data/skills'
import { useInViewOnce } from '../../hooks/useScrollSpy'
import { Section, SectionTitle } from '../ui/Section'

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const { setRef, inView } = useInViewOnce()

  return (
    <div className="skill-bar" ref={setRef}>
      <div className="skill-bar__header">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: inView ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const midpoint = Math.ceil(skills.length / 2)
  const left = skills.slice(0, midpoint)
  const right = skills.slice(midpoint)

  return (
    <Section id="skills" muted>
      <SectionTitle title="Skills" description={skillsDescription} />
      <div className="skills__grid fade-in">
        <div>
          {left.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
        <div>
          {right.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </Section>
  )
}
