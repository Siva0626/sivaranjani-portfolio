import type { Project } from '../../content/types'
import { ProjectCard } from './ProjectCard'
import { EmptyState } from '../feedback/EmptyState'

export function ProjectGrid({ projects, emptyTitle, emptyDescription }: { projects: Project[]; emptyTitle: string; emptyDescription: string }) {
  if (!projects.length) return <EmptyState title={emptyTitle} description={emptyDescription} />
  return <div className="project-grid">{projects.map((project, index) => <ProjectCard key={`${project.name}-${index}`} project={project} />)}</div>
}
