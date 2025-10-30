import { useState } from 'react'
import { DateIcon, TimeIcon } from '../assets'

interface BookingsListProps {
  img: string
  carName: string
  requestedName: string
}

export default function ManageBookingsList({ img, carName, requestedName }: BookingsListProps) {
  const [bookingState, setBookingState] = useState('pending')

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-[200px] justify-center">
        <img className="h-full w-3/5 object-contain" src={img} alt="mfdoom" />
      </div>
      <div className="-mt-10 pl-5">
        <h1 className="font-serif text-3xl">{carName}</h1>
        <span className="text-md">Requested by {requestedName}</span>
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
      {bookingState === 'pending' ? (
        <div>
          <button
            onClick={() => setBookingState('accepted')}
            className="btn-form bg-white text-background"
          >
            Accept
          </button>
          <button onClick={() => setBookingState('declined')} className="btn-form mt-3 border-2">
            Decline
          </button>
        </div>
      ) : bookingState === 'accepted' ? (
        <div>
          <p className="text-green-500">Booking Accepted</p>
        </div>
      ) : (
        <div>
          <p className="text-red-500">Booking Declined</p>
        </div>
      )}
    </div>
  )
}
