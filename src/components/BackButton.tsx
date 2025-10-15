import { useNavigate } from 'react-router-dom'
import BackIcon from '../assets/BackIcon'

const BackButton: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/home')
    }
  }

  return (
    <div
      onClick={handleBack}
      className="flex cursor-pointer items-center gap-2 rounded-full p-2 transition"
      aria-label="Go back"
    >
      <BackIcon />
    </div>
  )
}

export default BackButton
