import { DateIcon, TimeIcon } from '../assets'

interface BookingsListProps {
  img: string
  carName: string
  ownerName: string
  index: number
}

export default function MyBookingsList({ img, carName, ownerName, index }: BookingsListProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-[200px] justify-center">
        <img className="h-full w-3/5 object-contain" src={img} alt="mfdoom" />
      </div>

      <div className="-mt-10 pl-5">
        <h1 className="text-3xl font-serif">{carName}</h1>
        <span className="text-md">Requested by {ownerName}</span>
      </div>
      <div className="flex justify-between pl-5 gap-20">
        <div className="flex flex-col gap-2 w-full">
          <span>from</span>
          <p className="flex gap-2">
            <DateIcon />

            <span>07 Jun 2023</span>
          </p>
          <p className="flex gap-2 -ml-1">
            <TimeIcon />
            <span>13:09</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span>to</span>
          <p className="flex gap-2">
            <DateIcon />

            <span>07 Jun 2023</span>
          </p>
          <p className="flex gap-2 -ml-1">
            <TimeIcon />

            <span>14:09</span>
          </p>
        </div>
      </div>
      {index === 0 ? (
        <div>
          <p className="text-green-500">Booking accepted.</p>
          <p className="w-3/5 text-accent-light mt-3">
            You can not pick up the car before the agreed time
          </p>
        </div>
      ) : index === 1 ? (
        <div>
          <p className="text-accent-light">Booking request pending</p>
        </div>
      ) : index === 2 ? (
        <div>
          <p className="text-red-500">Booking declined</p>
        </div>
      ) : index === 3 ? (
        <div>
          <p className="text-green-500">Car was returned.</p>
        </div>
      ) : null}
    </div>
  )
}
