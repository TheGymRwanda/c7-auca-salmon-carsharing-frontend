import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'
import ProfileIcon from '../assets/ProfileIcon'
import LockIcon from '../assets/LockIcon'
import Button from '../components/Button'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center font-serif text-gray-300">
        <div className="mb-16 flex flex-col items-center">
          <h1 className="text-5xl font-bold">MONI</h1>
          <p className="text-5xl italic">share</p>
        </div>
        <div className="mb-5 text-center">
          <h1 className="text-lg font-medium">Log in</h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-6 flex w-full max-w-xs flex-col gap-4">
          <div className="relative">
            <ProfileIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full rounded-full bg-background-light px-12 py-3 text-center placeholder:text-gray-100 focus:outline-none"
              type="text"
              placeholder="Username / e-mail"
            />
          </div>
          <div className="relative">
            <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-full bg-background-light px-12 py-3 text-center placeholder:text-gray-100 focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-center text-red-400">{error}</p>}
          <Button disabled={isLoading} type="submit" variant="primary" className="mt-10">
            {isLoading ? 'please wait...' : 'Log In'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
