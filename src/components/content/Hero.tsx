import { Link } from 'react-router-dom'
import { homeSupportingAreas, siteContent } from '../../content/portfolio'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <p className="eyebrow">Professional portfolio</p>
      <h1 id="home-title">{siteContent.name}</h1>
      <p className="hero__title">{siteContent.title}</p>
      <p className="hero__intro">{siteContent.introduction}</p>
      <p className="hero__areas">{homeSupportingAreas.join(' • ')}</p>
      <div className="hero__portrait-placeholder" role="img" aria-label="Professional portrait placeholder for Sivaranjani Selvaraj">
        Professional portrait placeholder
      </div>
      <div className="button-group">
        <Link className="button button--primary" to="/capabilities">Explore capabilities</Link>
        <Link className="button button--secondary" to="/contact">Get in touch</Link>
      </div>
    </section>
  )
}
