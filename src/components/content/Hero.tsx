import { Link } from 'react-router-dom'
import { siteContent } from '../../content/portfolio'
import profileImage from '../../app/assets/profile.png'

export function Hero() {
  const nameParts = siteContent.name.split(' ')

  return (
    <section className="hero-modern" aria-labelledby="home-title">
      <div className="hero-modern__bg" aria-hidden="true" />

      <div className="page-container hero-modern__inner">
        <div className="hero-modern__content">
          <p className="hero-modern__eyebrow">Operations • Digital Work • AI-Assisted Growth</p>

          <h1 id="home-title">
            <span>{nameParts[0]}</span>
            <span>{nameParts.slice(1).join(' ')}</span>
            <span className="hero-modern__accent">Operations.</span>
            <span className="hero-modern__accent hero-modern__accent--muted">Digital Work.</span>
            <span className="hero-modern__accent hero-modern__accent--soft">AI-Assisted Experiences.</span>
          </h1>

          <p className="hero-modern__title">{siteContent.title}</p>

          <p className="hero-modern__intro">
            {siteContent.introduction}
          </p>

          <div className="hero-modern__buttons">
            <Link className="modern-button modern-button--primary" to="/projects">
              View My Work
              <span aria-hidden="true">→</span>
            </Link>

            <Link className="modern-button modern-button--secondary" to="/contact">
              Let's Talk
            </Link>
          </div>

          <div className="hero-modern__socials">
            <a href={siteContent.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>

            <a href={`mailto:${siteContent.contactEmail}`} aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="hero-modern__visual" aria-label="Sivaranjani portfolio portrait and capability highlight">
          <div className="hero-modern__glow" />
          <div className="hero-modern__orbit hero-modern__orbit--one" />
          <div className="hero-modern__orbit hero-modern__orbit--two" />

          <div className="hero-modern__profile">
            <img
              src={profileImage}
              alt="Sivaranjani Selvaraj standing in a professional portfolio portrait in a red top"
            />
          </div>

          <div className="floating-card floating-card--ai">
            <strong>AI</strong>
            <span>AI-Assisted Workflows</span>
          </div>

          <div className="floating-card floating-card--data">
            <strong>DATA</strong>
            <span>Data Analysis</span>
          </div>

          <div className="floating-card floating-card--learning">
            <strong>LEARN</strong>
            <span>Course Creation</span>
          </div>
        </div>
      </div>
    </section>
  )
}