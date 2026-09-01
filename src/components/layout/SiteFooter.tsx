import { Link } from 'react-router-dom'
import { siteContent } from '../../content/portfolio'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div>
          <Link className="footer-identity" to="/">{siteContent.name}</Link>
          <p>Professional portfolio</p>
        </div>
        <nav aria-label="Footer contact links">
          <ul className="footer-navigation">
            <li><Link to="/contact">Contact</Link></li>
            <li><a href={siteContent.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
