import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'

interface CarDetails {
  name: string
  owner: string
  type: string
  picture: string
}

function CarCard({ name, owner, type, picture }: CarDetails) {
  return (
    <>
      <div className=" left-[17px] top-[168px] m-5 h-[220px] w-[90vw] rounded-lg bg-[#3E7591]/70 px-[30px] py-[16px] shadow md:w-[700px]">
        <div className="flex h-[188px] w-full items-center justify-between gap-1 p-3 md:w-[650px]">
          {/* Showing the image */}

          <InteractiveCarImage src={picture} alt={name} />

          {/* Show details with icons */}
          <div className="flex h-[188px] w-[118px] flex-col gap-[32px] ">
            <div className=" flex h-[136px] w-[118px] flex-col gap-[16px]">
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
              <button className="text-center align-middle text-[14px] font-bold">
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
