import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { AppRoutes } from '../routes/AppRoutes'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      <div className="mt-40 flex flex-col justify-center font-serif font-bold text-gray-100 md:justify-center">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold">MONI</h1>
          <h1 className="text-5xl italic">share</h1>
        </div>
        <div className="m-14  text-center font-medium">
          <p className="text-xl">Start sharing your Monis with the world</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:justify-center  ">
        <div className="  flex w-full max-w-xs flex-col items-center gap-6 ">
          <Button
            className="mt-20 md:mt-0"
            variant="primary"
            onClick={() => {
              navigate(AppRoutes.login)
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  )
}
