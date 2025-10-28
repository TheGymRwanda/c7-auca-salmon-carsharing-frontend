import { MenuOptProps } from '../type/types'
import { NavLink } from 'react-router-dom'

export default function MenuOpt({ children, to, closeMenu, isLogout }: MenuOptProps) {
  if (isLogout) {
    return (
      <NavLink
        to={to}
        onClick={() => {
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          closeMenu && closeMenu()
        }}
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-600"
      >
        {children}
      </NavLink>
    )
  }
  return (
    <NavLink
      to={to}
      onClick={() => {
        closeMenu && closeMenu()
      }}
      className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors ${isActive ? 'bg-slate-800' : 'hover:bg-slate-600'}`
      }
    >
      {children}
    </NavLink>
  )
}
