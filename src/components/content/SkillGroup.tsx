import type { Capability } from '../../content/types'

export function SkillGroup({ capability }: { capability: Capability }) {
  return (
    <article className="skill-group">
      <h3>{capability.category}</h3>
      <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  )
}
