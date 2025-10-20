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
    <a onClick={handleClick} className="cursor-pointer">
      <img src={logo} alt="Logo" className="size-8" />
    </a>
  )
}
