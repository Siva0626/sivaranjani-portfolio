import type { Capability, ContentGroup, Project } from './types'

export const siteContent = {
  name: 'Sivaranjani Selvaraj',
  title: 'Operations & Digital Workflow Professional',
  introduction: 'I work across operations, digital workflows, instructional design, AI-assisted work, data analysis, and course creation. I combine structured ways of working with digital tools, AI support, data-focused tasks, and learning content to help organise and deliver practical work.',
  aboutIntroduction: 'I am an Operations & Digital Workflow Professional with an M.Sc. in Computer Science. My work brings together operations and management with digital work, AI-assisted workflows, instructional design, data analysis, and course creation.',
  contactIntroduction: 'For enquiries about operations, management, digital work, AI-assisted workflows, instructional design, data analysis, course creation, or vibe coding, you can contact me by email or LinkedIn.',
  contactEmail: 'sivaranjani0626@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/sivaranjani-selvaraj26061996/',
}

const whatsAppNumber = '919363655620'
export const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent('Hello Sivaranjani, I visited your professional portfolio and would like to discuss an opportunity.')}`

export const capabilities: Capability[] = [
  { category: 'Operations', items: ['Managing office operations', 'Handling and maintaining employee-related operations', 'Monitoring activities', 'Solving operational problems'] },
  { category: 'Management', items: ['Monitoring', 'Managing day-to-day activities', 'Problem solving'] },
  { category: 'Digital Work', items: ['Poster design', 'Brochure design', 'PPT creation'] },
  { category: 'AI-Assisted Workflows', items: ['ChatGPT', 'Claude', 'Codex', 'NaturalReader', 'HeyGen'] },
  { category: 'Instructional Design', items: ['Instructional design work', 'Structuring learning content', 'Creating course material', 'Using AI tools to support learning and content workflows'] },
  { category: 'Data Analysis', items: ['Data cleaning', 'Data analysis', 'Employee-management-related data analysis'] },
  { category: 'Course Creation', items: ['Data Analysis course creation', 'PPT-based course material creation'] },
  { category: 'Vibe Coding', items: ['AI-assisted website development / vibe coding', 'AI-assisted digital development capability; not full-stack development'] },
]

export const homeSupportingAreas = capabilities.map((capability) => capability.category)

export const aboutContent: ContentGroup[] = [
  { title: 'Operations and management', items: ['Managing office operations', 'Handling and maintaining employee-related operations', 'Monitoring activities', 'Solving operational problems', 'Managing day-to-day activities'] },
  { title: 'Digital work', items: ['Poster design', 'Brochure design', 'PPT creation'] },
  { title: 'AI-assisted workflows', items: ['ChatGPT', 'Claude', 'Codex', 'NaturalReader', 'HeyGen'] },
  { title: 'Instructional design and course creation', items: ['Instructional design work', 'Structuring learning content', 'Creating course material', 'Using AI tools to support learning and content workflows', 'Data Analysis course creation', 'PPT-based course material creation'] },
  { title: 'Data analysis', items: ['Data cleaning', 'Data analysis', 'Employee-management-related data analysis'] },
  { title: 'Vibe coding', items: ['AI-assisted website development / vibe coding', 'Presented as an AI-assisted digital development capability, not full-stack development'] },
  { title: 'Education', items: ['M.Sc. Computer Science'] },
]

export const courseCreationContent: ContentGroup[] = [
  { title: 'Course-creation focus', items: ['Data Analysis course creation', 'PPT-based course material creation'] },
  { title: 'Instructional design', items: ['Structuring learning content', 'Creating course material'] },
  { title: 'AI-assisted content workflows', items: ['Using AI tools to support learning and content workflows', 'NaturalReader', 'HeyGen'] },
]

export const dataAnalysisContent: ContentGroup[] = [
  { title: 'Data-analysis focus', items: ['Data cleaning', 'Data analysis', 'Employee-management-related data analysis'] },
  { title: 'Related learning content', items: ['Data Analysis course creation', 'PPT-based course material creation'] },
]

export const projects: Project[] = []
export const courseCreationProjects: Project[] = []
export const dataAnalysisProjects: Project[] = []
