import { ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileIcon, LogoutIcon } from '../assets/index'

export default function ProfileDropdown(): ReactElement {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        <ProfileIcon className="size-6" />
      </button>

      {isOpen && (
        <div className="absolute -right-5 z-50 mt-5 w-28 rounded-md bg-background-lighter text-gray-100 shadow-lg">
          <div className="py-1">
            <button
              onClick={() => {
                navigate('/profile')
                setIsOpen(false)
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              View Profile
            </button>
            <button
              onClick={() => {
                handleLogout()
                setIsOpen(false)
              }}
              className="flex w-full items-center px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              <LogoutIcon className="mr-2 size-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
