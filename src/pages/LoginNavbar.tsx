import { ReactElement } from 'react'
import Logo from '../assets/Logo'

interface NavbarProps {
  className?: string
}

export default function LoginNavbar({ className }: NavbarProps): ReactElement {
  return (
    <nav
      className={`flex h-16 w-full items-center justify-center bg-[#0F172A] px-4 rounded-b-xl text-white ${className}`}
    >
      {/* Logo only */}
      <div className="flex items-center gap-2 rounded-full">
        <Logo className="h-8 w-8 cursor-pointer text-white" />
      </div>
    </nav>
  )
}
