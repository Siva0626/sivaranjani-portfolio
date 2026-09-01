import { Link } from 'react-router-dom'

type CTASectionProps = { title: string; description: string; to: string; label: string }

export function CTASection({ title, description, to, label }: CTASectionProps) {
  return <aside className="cta-section"><h2>{title}</h2><p>{description}</p><Link className="button button--primary" to={to}>{label}</Link></aside>
}
