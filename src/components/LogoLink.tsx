import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function LogoLink(): ReactElement {
  const navigate = useNavigate()

  const handleClick = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/home')
    } else {
      navigate('/')
    }
  }

  return (
    <a
      onClick={handleClick}
      className="cursor-pointer rounded-full border border-slate-900 bg-slate-900  p-7 md:border-0 md:p-0"
    >
      <img src={logo} alt="Logo" className="size-8" />
    </a>
  )
}
