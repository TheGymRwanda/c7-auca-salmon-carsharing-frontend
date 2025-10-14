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
    <button
      onClick={handleBack}
      className="flex items-center gap-2 rounded-full p-2 transition hover:bg-gray-100"
      aria-label="Go back"
    >
      <BackIcon />
      <span className="hidden text-sm font-medium sm:inline">Back</span>
    </button>
  )
}

export default BackButton
