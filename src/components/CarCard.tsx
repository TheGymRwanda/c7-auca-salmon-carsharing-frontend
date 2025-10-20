import { useNavigate } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'
import { CarDetailsType } from '../type/types'

export default function CarCard({ id, name, owner, type, picture }: CarDetailsType) {
  const navigate = useNavigate()
  const goToCarDetails = () => {
    navigate(`/car-details/${id}`)
  }
  return (
    <>
      <div className="m-3 flex h-64 w-full max-w-md items-center justify-center rounded-2xl bg-background-lighter px-4 py-6 shadow-md transition-all hover:shadow-xl md:h-80 md:max-w-3xl md:flex-row md:justify-between md:gap-8 lg:max-w-4xl">
        <div className="flex h-48 items-center justify-center gap-5 md:h-60 md:w-auto md:gap-10">
          <InteractiveCarImage src={picture} alt={name} />
          <div className="items-left flex h-48 w-28 flex-col gap-8 p-4">
            <div className="-ml-8 flex h-32 w-28 flex-col gap-3">
              <div className="flex h-14 w-28 items-center gap-2 space-y-5 text-xl tracking-normal">
                <span className="align-middle  font-serif font-medium">{name}</span>
              </div>

              <div className="flex h-6 w-20 items-center gap-2">
                <ProfileIcon className="size-5" />
                <span>{owner}</span>
              </div>

              <div className="flex h-6 w-28 items-center gap-2 ">
                <CarIcon className="size-6" />
                <span>{type}</span>
              </div>
            </div>
            <div className="-ml-10 flex h-5 w-28 cursor-pointer justify-end text-yellow-100">
              <a className="text-left text-lg" onClick={goToCarDetails}>
                Show details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
