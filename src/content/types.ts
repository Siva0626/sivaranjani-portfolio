export type ProjectType = 'project' | 'course-creation' | 'data-analysis'

export type Project = {
  name: string
  context: string
  objective: string
  role: string
  workPerformed: string[]
  tools: string[]
  type: ProjectType
}

export type Capability = {
  category: string
  items: string[]
}

export type ContentGroup = {
  title: string
  items: string[]
}
