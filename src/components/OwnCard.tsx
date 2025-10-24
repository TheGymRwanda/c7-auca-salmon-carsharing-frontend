import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import InteractiveCarImage from './InteractiveCarImage'
import { OwnCardProps } from '../type/types'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function OwnCard({
  id,
  name,
  owner,
  type,
  picture,
  buttonLabel,
  onAction,
  buttonVariant = 'primary',
}: OwnCardProps) {
  const navigate = useNavigate()

  const goToCarDetails = () => {
    if (id) {
      navigate(`/car-details/${id}`)
    }
  }
  const handleAction = () => {
    if (onAction && id) {
      onAction(id)
    }
  }

  return (
    <div className="m-3 flex h-72 max-w-md flex-col items-center justify-center rounded-lg bg-background-lighter p-5 text-gray-300 shadow md:w-96">
      <div className="flex h-48 items-center justify-center gap-5 md:w-80">
        <div>
          <InteractiveCarImage src={picture} alt={name} />
        </div>
        <div className="flex h-48 w-28 flex-col gap-8">
          <div className="flex h-32 w-28 flex-col gap-3">
            <div className="flex h-14 w-28 items-center gap-2 space-y-5 text-xl tracking-normal">
              <span className="align-middle font-serif font-medium">{name}</span>
            </div>

            <div className="flex h-6 w-20 items-center gap-2 font-bold">
              <ProfileIcon className="size-5" />
              <span>{owner}</span>
            </div>

            <div className="flex h-6 w-28 items-center gap-2">
              <CarIcon className="size-6" />
              <span>{type}</span>
            </div>
          </div>
          <div className="-ml-16 flex h-5 w-28 cursor-pointer justify-end text-yellow-100">
            <button
              className="text-left text-lg hover:underline"
              onClick={goToCarDetails}
              type="button"
            >
              Show details
            </button>
          </div>
        </div>
      </div>
      {buttonLabel && onAction && (
        <div className="mt-2 w-72">
          <Button variant={buttonVariant} className="w-100 mt-4" onClick={handleAction}>
            {buttonLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
