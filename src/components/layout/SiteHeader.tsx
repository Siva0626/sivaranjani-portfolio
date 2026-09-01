import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../../content/portfolio'
import { MobileMenuButton } from './MobileMenuButton'
import { PrimaryNavigation } from './PrimaryNavigation'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <Link
          className="site-identity"
          to="/"
          onClick={closeMenu}
        >
          <span className="site-identity__mark">
            SR
          </span>

          <span className="site-identity__text">
            <strong>Sivaranjani</strong>
            <small>Professional Portfolio</small>
          </span>
        </Link>

        <MobileMenuButton
          buttonRef={buttonRef}
          isOpen={isOpen}
          controls="primary-menu"
          onClick={() => setIsOpen((open) => !open)}
        />

        <div
          id="primary-menu"
          className={`navigation-panel${
            isOpen ? ' navigation-panel--open' : ''
          }`}
        >
          <PrimaryNavigation onNavigate={closeMenu} />

          <Link
            className="header-talk-button"
            to="/contact"
            onClick={closeMenu}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  )
}