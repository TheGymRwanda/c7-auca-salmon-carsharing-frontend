import { useLogout } from '../hooks/useLogout'
import { MenuOptProps } from '../type/types'
import { NavLink } from 'react-router-dom'

export default function MenuOpt({ children, to, closeMenu, isLogout }: MenuOptProps) {
  const { logout } = useLogout()
  if (isLogout) {
    return (
      <NavLink
        to={to}
        onClick={() => {
          logout()
          closeMenu && closeMenu()
        }}
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors"
      >
        {children}
      </NavLink>
    )
  }
  return (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left text-white transition-colors ${isActive ? 'bg-background-light' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}
