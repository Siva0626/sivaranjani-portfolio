import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/portfolio'
import profileImage from '../../app/assets/profile.png'

const PortfolioScene = lazy(() =>
  import('../3D/PortfolioScene').then((module) => ({
    default: module.PortfolioScene,
  })),
)

export function Hero() {
  const [motion, setMotion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handlePointer = (event: MouseEvent) => {
      if (reducedMotion) return

      const hero = document.querySelector('.hero-editorial')
      if (!hero) return

      const rect = hero.getBoundingClientRect()
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5

      setMotion({
        x: relativeX * 14,
        y: relativeY * 14,
      })
    }

    window.addEventListener('pointermove', handlePointer)

    return () => {
      window.removeEventListener('pointermove', handlePointer)
    }
  }, [])

  const heroStyles = {
    '--hero-shift-x': `${motion.x}px`,
    '--hero-shift-y': `${motion.y}px`,
  } as React.CSSProperties

  return (
    <section className="hero-editorial" aria-labelledby="home-title" style={heroStyles}>
      <div className="page-container hero-editorial__inner">
        <div className="hero-editorial__content">
          <p className="hero-editorial__eyebrow">Operations • Management • Digital &amp; AI</p>

          <h1 id="home-title" className="hero-editorial__headline">
            <span className="hero-editorial__name">Sivaranjani</span>
            <span className="hero-editorial__name hero-editorial__name--secondary">Selvaraj</span>
          </h1>

          <div className="hero-editorial__meta" aria-label="Professional capabilities">
            <span>Operations</span>
            <span>Management</span>
            <span>Digital &amp; AI</span>
          </div>

          <p className="hero-editorial__intro">{siteContent.introduction}</p>

          <div className="hero-editorial__actions">
            <Link className="modern-button modern-button--primary" to="/projects">
              View My Work
            </Link>
            <Link className="modern-button modern-button--secondary" to="/contact">
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className="hero-editorial__portrait-wrap" aria-label="Sivaranjani portrait">
          <div className="hero-editorial__portrait">
            <img
              src={profileImage}
              alt="Sivaranjani Selvaraj portrait"
            />
          </div>
        </div>

        <div className="hero-editorial__visual" aria-label="Three-dimensional professional capability narrative">
          <div className="hero-editorial__visual-stage">
            <div className="hero-editorial__visual-letter hero-editorial__visual-letter--operations">OPERATIONS</div>
            <div className="hero-editorial__visual-letter hero-editorial__visual-letter--management">MANAGEMENT</div>
            <div className="hero-editorial__visual-letter hero-editorial__visual-letter--digital">DIGITAL &amp; AI</div>

            <div className="hero-editorial__scene">
              <Suspense fallback={<div className="hero-editorial__scene-fallback" />}>
                <PortfolioScene />
              </Suspense>
            </div>

            <div className="hero-editorial__narration">
              <div className="hero-editorial__narration-head">
                <span className="hero-editorial__narration-label">AI assistant</span>
                <span className="hero-editorial__signal" aria-hidden="true" />
              </div>

              <div className="hero-editorial__video-mini" aria-label="Short introduction video">
                <img src={profileImage} alt="Sivaranjani in a short introduction video frame" />
                <button type="button" className="hero-editorial__play" aria-label="Play the short introduction">
                  ▶
                </button>
              </div>

              <p>How I connect operations, data, digital work and AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}