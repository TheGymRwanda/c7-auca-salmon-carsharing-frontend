import { ReactElement, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProtectedRoute(): ReactElement {
  const token = localStorage.getItem('token')
  const location = useLocation()

  useEffect(() => {
    if (!token) {
      toast.error('Please log in to access this page')
    }
  }, [token])

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <Outlet />
}
