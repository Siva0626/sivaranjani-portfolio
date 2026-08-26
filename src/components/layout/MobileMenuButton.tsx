import type { Ref } from 'react'

type MobileMenuButtonProps = {
  isOpen: boolean
  controls: string
  onClick: () => void
  buttonRef?: Ref<HTMLButtonElement>
}

export function MobileMenuButton({ isOpen, controls, onClick, buttonRef }: MobileMenuButtonProps) {
  return (
    <button
      className="mobile-menu-button"
      type="button"
      ref={buttonRef}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
    >
      <span aria-hidden="true">{isOpen ? 'Close' : 'Menu'}</span>
      <span className="sr-only">{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
    </button>
  )
}
