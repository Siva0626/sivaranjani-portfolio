import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../app/navigation'

type PrimaryNavigationProps = { onNavigate?: () => void }

export function PrimaryNavigation({ onNavigate }: PrimaryNavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="primary-navigation">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              onClick={onNavigate}
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
