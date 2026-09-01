import { trackPortfolioEvent } from '../../app/analytics'
import { whatsAppUrl } from '../../content/portfolio'

export function WhatsAppButton() {
  return (
    <a
      href={whatsAppUrl}
      className="communication-item communication-item--whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sivaranjani on WhatsApp about an opportunity"
      title="Chat with Sivaranjani on WhatsApp"
      onClick={() => trackPortfolioEvent('whatsapp_cta', { source: 'floating_button' })}
    >
      <span className="communication-item__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.7A9.3 9.3 0 0 0 4.7 16l-1 3.7 3.9-1.1A9.3 9.3 0 1 0 12 2.7Zm0 16.4c-1.1 0-2.1-.3-3-.8l-.2-.1-2.3.6.6-2.2-.1-.2A7.4 7.4 0 1 1 19.4 12a7.3 7.3 0 0 1-7.4 7.1Zm4.1-5.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.6.7-.7.9-.1.2-.3.2-.5.1-.6-.3-1.3-.8-1.8-1.4-.5-.5-.9-1.1-1.2-1.8-.1-.2 0-.4.1-.5l.1-.2c.1-.1.1-.2.2-.3.1-.1.1-.3.1-.4.1-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.5.2-.4.4-.8 1-.8 1.7 0 1 .6 1.9 1.1 2.5.7.9 1.4 1.5 2.4 2.1.9.4 1.5.5 2.1.5.6 0 1-.2 1.4-.5.3-.2.5-.5.6-.9.1-.3 0-.6 0-.8l-.3-.1Z" fill="currentColor"/>
        </svg>
      </span>
      <span className="communication-item__label">WhatsApp</span>
    </a>
  )
}
