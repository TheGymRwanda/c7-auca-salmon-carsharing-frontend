'use client'

import { ReactElement, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LogoLink from '../components/LogoLink'
import DesktopNav from '../components/DesktopNav'
import MobileHamburger from '../components/MobileHamburger'
import ProfileDropdown from '../components/ProfileDropdown'
import NavMenuList from '../components/NavMenuList'
import { AppRoutes } from '../routes/AppRoutes'
import { ProfileIcon } from '../assets'

export default function Navbar(): ReactElement {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const location = useLocation()
  const hideMenuAndProfile =
    location.pathname === AppRoutes.landing || location.pathname === AppRoutes.login
  const token = localStorage.getItem('token')
  const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen)
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen)
  const closeMenus = () => {
    setIsNavMenuOpen(false)
    setIsProfileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between
         bg-slate-900 px-4 text-white shadow`}
      >
        <div
          className={`hidden items-center md:flex ${!token ? 'md:rounded-full md:border md:border-slate-900 md:bg-slate-900 md:p-7' : ''}`}
        >
          <LogoLink />
        </div>
        {!hideMenuAndProfile && (
          <>
            <MobileHamburger isMenuOpen={isNavMenuOpen} toggleMenu={toggleNavMenu} />
            <DesktopNav />
          </>
        )}
        <div className="flex flex-1 justify-center md:hidden">
          <LogoLink />
        </div>
        {!hideMenuAndProfile && (
          <button onClick={toggleProfileMenu} className="flex items-center">
            <ProfileIcon className="size-6" />
          </button>
        )}
      </nav>
      {!hideMenuAndProfile && (
        <div
          className={`fixed flex inset-0 z-50 transition-opacity duration-300 md:hidden ${
            isNavMenuOpen || isProfileMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50" onClick={closeMenus} />
          <div
            className={`max-h-sm absolute left-3 top-20 w-56 max-w-[85vw] rounded-xl bg-background shadow-xl transition-transform duration-300 ${
              isNavMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {isNavMenuOpen && <NavMenuList closeMenu={closeMenus} />}
          </div>
          <div
            className={`max-h-sm absolute right-3 top-20 w-32 max-w-[85vw] rounded-xl bg-background shadow-xl transition-transform duration-300 ${
              isProfileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {isProfileMenuOpen && <ProfileDropdown closeMenu={closeMenus} />}
          </div>
        </div>
      )}
    </>
  )
}
