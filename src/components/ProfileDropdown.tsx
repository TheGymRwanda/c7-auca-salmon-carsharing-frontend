import { ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileIcon, LogoutIcon } from '../assets/index'
import { useLogout } from '../hooks/useLogout'
import { AppRoutes } from '../routes/AppRoutes'

export default function ProfileDropdown(): ReactElement {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useLogout()

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="flex items-center">
        <ProfileIcon className="size-6" />
      </div>
      {isOpen && (
        <div className="absolute -right-5 z-50 mt-5 w-28 rounded-md bg-background-lighter text-gray-100 shadow-lg">
          <div className="py-1">
            <div
              onClick={() => {
                navigate(AppRoutes.notFound)
                setIsOpen(false)
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              View Profile
            </div>
            <div
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="flex w-full items-center px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              <LogoutIcon className="mr-2 size-4" />
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
