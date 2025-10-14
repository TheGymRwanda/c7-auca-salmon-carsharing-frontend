import { useNavigate } from 'react-router-dom'
import Navbar from './NavBar'
import { useState } from 'react'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'
import ProfileIcon from '../assets/ProfileIcon'
import LockIcon from '../assets/LockIcon'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const response = await axios.post(`${apiUrl}/auth`, {
        username,
        password,
      })

      const { token, userId } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      navigate('/home')
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Invalid credentials')
      } else {
        setError('Invalid credentials')
      }
    }
  }

  return (
    <div>
      <Navbar profileMenuView={false} />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#2B5265] font-serif">
        {/* Logo */}
        <div className="mb-16 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white">MONI</h1>
          <p className="text-5xl italic text-white">share</p>
        </div>

        {/* Login text */}
        <div className="mb-5 text-center">
          <h1 className="text-lg font-medium text-white">Log in</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6 flex w-full max-w-xs flex-col gap-4">
          <div className="relative">
            <ProfileIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full rounded-full bg-[#64A1C0] px-12 py-3 text-center text-white placeholder:text-white focus:outline-none"
              type="text"
              placeholder="Username / e-mail"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-full bg-[#64A1C0] px-12 py-3 text-center text-white placeholder:text-white focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>

          {error && <p className="text-center text-red-400">{error}</p>}

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-white py-3 font-bold text-[#64A1C0] transition hover:bg-gray-100"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
