import { useNavigate } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'
import { CarDetailsType } from '../type/types'

export default function CarCard({ name, owner, type, picture }: CarDetailsType) {
  const navigate = useNavigate()
  const goToCarDetails = () => {
    navigate(`/car-details/${name}`)
  }
  return (
    <>
      <div className="m-3 flex h-64 max-w-md items-center justify-center rounded-lg bg-background-lighter px-1 py-5 shadow md:w-96">
        <div className="flex h-48 items-center justify-center gap-5 md:w-80">
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
            <div className="-ml-8 flex h-5 w-28 justify-end text-yellow-100">
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
