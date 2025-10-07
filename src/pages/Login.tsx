import { useNavigate } from 'react-router-dom'
import { FaUser, FaKey } from 'react-icons/fa'
import LoginNavbar from './LoginNavbar'
function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <LoginNavbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#2B5265] font-serif">
        {/* Logo */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-5xl font-bold text-white">MONI</h1>
          <h1 className="text-5xl italic text-white">share</h1>
        </div>

        {/* Login text */}
        <div className="text-center mb-5">
          <h1 className="text-lg text-white font-medium">Log in</h1>
        </div>

        {/* Inputs */}
        <div className="flex flex-col w-full max-w-xs gap-4 mb-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 " />
            <input
              className="w-full px-12 py-3 rounded-full text-white placeholder-white bg-[#64A1C0] focus:outline-none text-center"
              type="text"
              placeholder="Username / e-mail"
            />
          </div>
          <div className="relative">
            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 " />
            <input
              className="w-full px-12 py-3 rounded-full text-white placeholder-white bg-[#64A1C0] focus:outline-none text-center"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/Login')}
          className="mt-6 w-full max-w-xs py-3 rounded-full bg-white text-[#64A1C0] font-bold hover:bg-gray-100 transition"
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login
