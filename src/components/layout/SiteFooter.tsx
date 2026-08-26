import { Link } from 'react-router-dom'
import { navigationItems } from '../../app/navigation'
import { siteContent } from '../../content/portfolio'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div>
          <Link className="footer-identity" to="/">{siteContent.name}</Link>
          <p>Professional portfolio</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-navigation">
            {navigationItems.map((item) => <li key={item.path}><Link to={item.path}>{item.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
