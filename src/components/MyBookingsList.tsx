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
        <h1 className="font-serif text-3xl">{carName}</h1>
        <span className="text-md">Requested by {ownerName}</span>
      </div>
      <div className="flex justify-between gap-20 pl-5">
        <div className="flex w-full flex-col gap-2">
          <span>from</span>
          <p className="flex gap-2">
            <DateIcon />
            <span>07 Jun 2023</span>
          </p>
          <p className="-ml-1 flex gap-2">
            <TimeIcon />
            <span>13:09</span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <span>to</span>
          <p className="flex gap-2">
            <DateIcon />
            <span>07 Jun 2023</span>
          </p>
          <p className="-ml-1 flex gap-2">
            <TimeIcon />
            <span>14:09</span>
          </p>
        </div>
      </div>
      {index === 0 ? (
        <div>
          <p className="text-green-500">Booking accepted.</p>
          <p className="mt-3 w-3/5 text-accent-light">
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
