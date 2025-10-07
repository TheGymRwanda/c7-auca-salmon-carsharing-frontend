import { useNavigate } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'

interface CarDetailsType {
  name: string
  owner: string
  type: string
  picture: string
}

function CarCard({ name, owner, type, picture }: CarDetailsType) {
  const navigate = useNavigate()
  const goToCarDetails = () => {
    navigate(`/car-details/${name}`)
  }
  return (
    <>
      <div className="m-3 flex h-[250px] max-w-md items-center justify-center rounded-lg bg-[#3E7591]/70 px-[5px] py-[20px] shadow md:w-[700px]">
        <div className="flex h-[188px] items-center justify-center gap-5 md:w-[650px]">
          {/* Showing the image */}

          <div>
            <InteractiveCarImage src={picture} alt={name} />
          </div>
          {/* Show details with icons */}
          <div className=" flex h-[188px] w-[118px] flex-col gap-[30px]">
            <div className="flex h-[136px] w-[118px] flex-col gap-[10px]">
              <div className="flex h-[56px] w-[118px] items-center gap-2 space-y-5 text-[20px] tracking-normal">
                <span className="align-middle  font-serif font-medium">{name}</span>
              </div>

              <div className="flex h-[24px] w-[89px] items-center gap-2">
                <ProfileIcon className="h-5 w-5" />
                <span>{owner}</span>
              </div>

              <div className="flex h-[24px] w-[118px] items-center gap-2 ">
                <CarIcon className="h-6 w-6" />
                <span>{type}</span>
              </div>
            </div>
            <div className="-mt-3 mr-20 flex h-[20px] w-[88px] justify-end text-yellow-200">
              <button
                className="text-center align-middle text-[14px] font-bold"
                onClick={goToCarDetails}
              >
                Show details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CarCard
