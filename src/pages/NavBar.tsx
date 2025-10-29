'use client'

import { ReactElement, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoLink from '../components/LogoLink'
import DesktopNav from '../components/DesktopNav'
import MobileHamburger from '../components/MobileHamburger'
import ProfileDropdown from '../components/ProfileDropdown'
import NavMenuList from '../components/NavMenuList'

export default function Navbar({
  className,
  profile = true,
}: {
  className?: string
  profile?: boolean
}): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const hideMenuAndProfile = location.pathname === '/' || location.pathname === '/Login'
  const token = localStorage.getItem('token')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex h-16 w-full items-center ${
          !hideMenuAndProfile && profile ? 'justify-between' : 'justify-center'
        } bg-slate-900 px-4 text-white shadow ${className}`}
      >
        <div
          className={`hidden items-center md:flex ${!token ? 'md:rounded-full md:border md:border-slate-900 md:bg-slate-900 md:p-7' : ''}`}
        >
          <LogoLink />
        </div>

        {!hideMenuAndProfile && (
          <>
            <MobileHamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <DesktopNav />
          </>
        )}

        <div className="flex flex-1 justify-center md:hidden">
          <LogoLink />
        </div>
        {!hideMenuAndProfile && profile && (
          <div className="flex items-center">
            <ProfileDropdown />
          </div>
        )}
      </nav>

      {!hideMenuAndProfile && profile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
          <div
            className={`max-h-sm absolute left-5 top-20 w-80 max-w-[85vw] rounded-xl bg-background shadow-xl transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <NavMenuList closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </>
  )
}
