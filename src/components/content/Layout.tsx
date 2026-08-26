import type { ReactNode } from 'react'

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="page-container">{children}</div>
}

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`section ${className}`.trim()}>{children}</section>
}

type SectionHeadingProps = { eyebrow?: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return <div className="section-heading">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}
