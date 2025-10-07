import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className=" ">
      <div className="mt-[90px] flex flex-col  justify-center  font-serif font-bold md:justify-center">
        <div className="mb-24  flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold">MONI</h1>
          <h1 className="text-5xl italic">share</h1>
        </div>

        <div className="text-center  font-medium mb-20">
          <p className="text-lg">Start sharing your Monis with the world</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:justify-center  ">
        <div className="  flex w-full max-w-xs flex-col items-center gap-6 ">
          <button
            onClick={() => {
              navigate('/Login')
            }}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
