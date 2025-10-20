import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarPlusIcon, CarIcon, CalendarIcon, CarsIcon } from '../assets/index'

export default function DesktopNav(): ReactElement {
  const navigate = useNavigate()

  return (
    <div className="mt-5 hidden flex-1 justify-center space-x-6 md:flex">
      <button
        onClick={() => navigate('/show-all-cars')}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarPlusIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Show All Cars
        </span>
      </button>

      <button
        onClick={() => navigate('/create-booking')}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Book A Car
        </span>
      </button>

      <button
        onClick={() => navigate('/user-bookings')}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CalendarIcon className="size-8 text-white" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My Bookings
        </span>
      </button>

      <button
        onClick={() => navigate('/own-car')}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarsIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My Cars
        </span>
      </button>
    </div>
  )
}
