import { useNavigate } from 'react-router-dom'
import { FaUser, FaKey } from 'react-icons/fa'
import Navbar from './NavBar'
function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar profileMenuView={false} />

      <div className="flex min-h-screen flex-col items-center justify-center bg-[#2B5265] font-serif">
        {/* Logo */}
        <div className="mb-16 flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white">MONI</h1>
          <h1 className="text-5xl italic text-white">share</h1>
        </div>

        {/* Login text */}
        <div className="mb-5 text-center">
          <h1 className="text-lg font-medium text-white">Log in</h1>
        </div>

        {/* Inputs */}
        <div className="mb-6 flex w-full max-w-xs flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 " />
            <input
              className="w-full rounded-full bg-[#64A1C0] px-12 py-3 text-center text-white placeholder:text-white focus:outline-none"
              type="text"
              placeholder="Username / e-mail"
            />
          </div>
          <div className="relative">
            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 " />
            <input
              className="w-full rounded-full bg-[#64A1C0] px-12 py-3 text-center text-white placeholder:text-white focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/Login')}
          className="mt-6 w-full max-w-xs rounded-full bg-white py-3 font-bold text-[#64A1C0] transition hover:bg-gray-100"
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login
