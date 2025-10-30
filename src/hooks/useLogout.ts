import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../routes/AppRoutes'

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate(AppRoutes.landing)
  }

  return { logout }
}
