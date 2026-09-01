import { Link } from 'react-router-dom'
import { PageContainer, Section } from '../components/content/Layout'

export function NotFoundPage() {
  return <PageContainer><Section className="page-intro"><p className="eyebrow">Page not found</p><h1>This page is not available</h1><p>The page you requested may have moved or may not exist.</p><Link className="button button--primary" to="/">Return home</Link></Section></PageContainer>
}
