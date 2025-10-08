import { ReactElement, useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import Logo from '../assets/Logo'
import CarIcon from '../assets/CarIcon'
import CalendarIcon from '../assets/CalendarIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import PlusIcon from '../assets/PlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { useNavigate } from 'react-router-dom'
import CarPlusIcon from '../assets/CarPlusIcon'

interface NavbarProps {
  className?: string
  profileMenuView?: boolean
}

// eslint-disable-next-line max-lines-per-function
export default function Navbar({ className, profileMenuView = true }: NavbarProps): ReactElement {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 flex h-[56px] w-full items-center justify-between rounded-b-xl bg-[#0F172A] px-4 text-white shadow ${className}`}
      >
        {/* Left - Menu Button */}
        {profileMenuView && (
          <button onClick={toggleMenu} className="text-sm text-gray-300 md:cursor-default">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        )}

        {/* Center - Car Icon inside circular cutout */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-[#0F172A] p-6 shadow-lg">
            <Logo
              onClick={() => {
                const token = localStorage.getItem('token')
                if (token) {
                  navigate('/home')
                } else {
                  navigate('/')
                }
              }}
              className="size-8 text-white"
            />
          </div>
        </div>

        {/* Right - Profile Icon */}
        {profileMenuView && <ProfileIcon className="size-5" />}
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

        {/* Sidebar */}
        <div
          className={`max-h-sm absolute left-5 top-20 w-80 max-w-[85vw] bg-background shadow-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu Items */}
          <div className="space-y-1 p-4">
            {/* Show all cars */}
            <button
              onClick={() => {
                navigate('/show-all-cars')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg bg-[#2d5278] px-4 py-3 text-left text-white transition-colors hover:bg-[#35607d]"
            >
              <CarPlusIcon className="size-5" />
              <span className="text-sm font-medium">Show All Car</span>
            </button>

            {/* Book A Car */}
            <button
              onClick={() => {
                navigate('/create-booking')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-[#35607d]"
            >
              <CarIcon className="size-5" />
              <span className="text-sm font-medium">Book A Car</span>
            </button>

            {/* My Bookings */}
            <button
              onClick={() => {
                navigate('/user-bookings')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white hover:bg-[#2d5278]"
            >
              <CalendarIcon className="text-white" />
              <span className="text-sm font-medium">My Bookings</span>
            </button>

            {/* Divider */}
            <div className="my-4 border-t border-gray-100" />

            {/* My cars section header */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-semibold text-white">My cars</h3>
            </div>

            {/* See My Cars */}
            <button
              onClick={() => {
                navigate('/own-car')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-[#2d5278]"
            >
              <CarsIcon />
              <span className="text-sm font-medium">See My Cars</span>
            </button>

            {/* My Car's Bookings */}
            <button
              onClick={() => {
                navigate('/booking-management')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-[#2d5278]"
            >
              <ListIcon />
              <span className="text-sm font-medium">My Car&apos;s Bookings</span>
            </button>

            {/* Add New Car */}
            <button
              onClick={() => {
                navigate('/add-car')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-[#2d5278]"
            >
              <PlusIcon className="size-5" />
              <span className="text-sm font-medium">Add New Car</span>
            </button>

            {/* Divider */}
            <div className="my-4 border-t border-gray-100" />

            {/* Log Out */}
            <button
              onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                navigate('/login')
                closeMenu()
              }}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-[#2d5278]"
            >
              <LogoutIcon />
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
