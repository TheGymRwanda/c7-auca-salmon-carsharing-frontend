import { useNavigate } from 'react-router-dom'
import { ProfileIcon, LogoutIcon } from '../assets/index'
import { useLogout } from '../hooks/useLogout'
import { AppRoutes } from '../routes/AppRoutes'

export default function ProfileDropdown({ closeMenu }: { closeMenu: () => void }) {
  const navigate = useNavigate()
  const { logout } = useLogout()

  return (
    <div className="p-1">
      <div
        onClick={() => {
          navigate(AppRoutes.notFound)
          closeMenu()
        }}
        className="flex w-full items-center px-4 py-2 text-left text-sm"
      >
        <ProfileIcon className="mr-2 size-4" />
        Profile
      </div>
      <div
        onClick={() => {
          logout()
          closeMenu()
        }}
        className="flex w-full items-center px-4 py-2 text-left text-sm"
      >
        <LogoutIcon className="mr-2 size-4" />
        Logout
      </div>
    </div>
  )
}
