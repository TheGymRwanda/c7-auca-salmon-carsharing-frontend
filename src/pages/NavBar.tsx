import { ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileIcon } from '../assets/index'
import NavMenuList from '../components/NavMenuList'
import logo from '../assets/logo.svg'

export default function Navbar({
  className,
  profileMenuView = true,
}: {
  className?: string
  profileMenuView?: boolean
}): ReactElement {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between rounded-b-xl bg-slate-900 px-4 text-white shadow ${className}`}
      >
        {profileMenuView && (
          <button onClick={toggleMenu} className="text-sm text-gray-300 md:cursor-default">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        )}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-slate-900 p-6 shadow-lg">
            <a
              onClick={() => {
                const token = localStorage.getItem('token')
                if (token) {
                  navigate('/home')
                } else {
                  navigate('/')
                }
              }}
              className="size-8 text-white"
            >
              <img src={logo} alt="Logo" className="size-15 text-white" />
            </a>
          </div>
        </div>
        {profileMenuView && <ProfileIcon className="size-5" />}
      </nav>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
        <div
          className={`max-h-sm absolute left-5 top-20 w-80 max-w-[85vw] bg-background shadow-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <NavMenuList closeMenu={closeMenu} />
        </div>
      </div>
    </>
  )
}
