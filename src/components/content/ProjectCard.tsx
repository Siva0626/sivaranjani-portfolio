import type { Project } from '../../content/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__visual" aria-hidden="true">Portfolio item</div>
      <div className="project-card__body">
        <p className="eyebrow">{project.type.replace('-', ' ')}</p>
        <h3>{project.name}</h3>
        <dl className="project-card__details">
          <div><dt>Context</dt><dd>{project.context}</dd></div>
          <div><dt>Objective</dt><dd>{project.objective}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Work performed</dt><dd>{project.workPerformed.join(', ')}</dd></div>
          <div><dt>Tools</dt><dd>{project.tools.join(', ')}</dd></div>
        </dl>
      </div>
    </article>
  )
}
