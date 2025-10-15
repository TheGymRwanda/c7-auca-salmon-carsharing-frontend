// import { useNavigate } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'
import { CarDetailsType } from '../type/types'
import Button from './Button'

export default function OwnCard({ name, owner, type, picture }: CarDetailsType) {
  // const navigate = useNavigate()
  // const goToCarDetails = () => {
  //   navigate(`/car-details/${name}`)
  // }
  return (
    <>
      <div className="m-3 flex h-72 max-w-md flex-col items-center justify-center rounded-lg bg-background-lighter px-1 py-5 text-gray-300 shadow md:w-96">
        <div className="flex h-48 items-center justify-center gap-5 md:w-80">
          {/* Showing the image */}

          <div>
            <InteractiveCarImage src={picture} alt={name} />
          </div>
          <div className=" flex h-48 w-28 flex-col gap-8 ">
            <div className="flex h-32 w-28 flex-col gap-3">
              <div className="flex h-14 w-28 items-center gap-2 space-y-5 text-xl tracking-normal">
                <span className="align-middle  font-serif font-medium">{name}</span>
              </div>

              <div className="flex h-6 w-20 items-center gap-2 font-bold">
                <ProfileIcon className="size-5" />
                <span>{owner}</span>
              </div>

              <div className="flex h-6 w-28 items-center gap-2 ">
                <CarIcon className="size-6" />
                <span>{type}</span>
              </div>
            </div>
            <div className="-ml-2 flex h-5 w-28 justify-end text-yellow-100">
              <a
                className="text-left text-lg"
                // onClick={goToCarDetails}
              >
                Show details
              </a>
            </div>
          </div>
        </div>
        <div>
          <Button variant="outline2" className="mt-4">
            Delete
          </Button>
        </div>
      </div>
    </>
  )
}
