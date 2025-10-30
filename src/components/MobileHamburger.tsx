import { ReactElement } from 'react'

interface MobileHamburgerProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function MobileHamburger({
  isMenuOpen,
  toggleMenu,
}: MobileHamburgerProps): ReactElement {
  return (
    <button onClick={toggleMenu} className="text-lg text-gray-300 md:hidden">
      {isMenuOpen ? 'Close' : 'Menu'}
    </button>
  )
}
