import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { WhatsAppButton } from '../content/WhatsAppButton'
import { PortfolioAssistant } from '../content/PortfolioAssistant'
import { siteContent } from '../../content/portfolio'

type AppShellProps = { children: ReactNode }

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <SiteFooter />

      <div className="floating-communication" aria-label="Communication options">
        <a
          className="communication-item communication-item--email"
          href={`mailto:${siteContent.contactEmail}`}
          aria-label="Email Sivaranjani"
        >
          <span className="communication-item__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.2-.5 7.8 5.7 7.8-5.7H6.2Zm13.3 2.2-7.1 5.2a1 1 0 0 1-1.2 0L4.5 9.2v7.3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7.3Z" fill="currentColor"/>
            </svg>
          </span>
          <span className="communication-item__label">Email</span>
        </a>

        <WhatsAppButton />
        <PortfolioAssistant />
      </div>
    </div>
  )
}
