import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks'
import Button from '../components/Button'

export default function HomePage() {
  const userId = localStorage.getItem('userId')
  const [{ data: name }] = useUser(userId ? userId : '')
  const navigate = useNavigate()
  return (
    <>
      <div className="mt-32 flex flex-col justify-center font-serif font-bold text-gray-300 md:justify-center">
        <div className="mb-10 flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold">MONI</h1>
          <p className="text-5xl italic">share</p>
        </div>

        <div className="text-center text-xl  font-medium">
          <p>Hello {name?.name}!</p>
          <p>What are you up to today?</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:justify-center">
        <div className="flex w-full max-w-xs flex-col items-center gap-6">
          <Button
            onClick={() => navigate('/create-booking')}
            variant="primary"
            className="mt-20 md:mt-0"
          >
            Book Car
          </Button>
          <p>or</p>
          <Button variant="outline" onClick={() => navigate('/own-car')}>
            See my Cars
          </Button>
          <Button variant="outline" onClick={() => navigate('/user-bookings')}>
            See my Bookings
          </Button>
        </div>
      </div>
    </>
  )
}
