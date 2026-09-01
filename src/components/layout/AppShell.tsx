import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { WhatsAppButton } from '../content/WhatsAppButton'
import { PortfolioAssistant } from '../content/PortfolioAssistant'

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

      <WhatsAppButton />
      <PortfolioAssistant />
    </div>
  )
}
