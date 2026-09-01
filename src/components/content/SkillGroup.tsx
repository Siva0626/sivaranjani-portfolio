import type { Capability } from '../../content/types'

export function SkillGroup({ capability }: { capability: Capability }) {
  return (
    <details className="skill-group">
      <summary className="skill-group__summary">
        <span>{capability.category}</span>
        <span className="skill-group__icon" aria-hidden="true">
          +
        </span>
      </summary>

      <div className="skill-group__content">
        <ul>
          {capability.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </details>
  )
}