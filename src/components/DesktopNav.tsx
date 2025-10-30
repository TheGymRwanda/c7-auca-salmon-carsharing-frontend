import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { CarPlusIcon, CarIcon, CalendarIcon, CarsIcon } from '../assets/index'
import { AppRoutes } from '../routes/AppRoutes'

export default function DesktopNav(): ReactElement {
  return (
    <div className="mt-5 hidden flex-1 justify-center space-x-6 md:flex">
      <NavLink
        to={AppRoutes.showAllCars}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarPlusIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Show All Cars
        </span>
      </NavLink>
      <NavLink
        to={AppRoutes.createBooking}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Book A Car
        </span>
      </NavLink>
      <NavLink
        to={AppRoutes.userBookings}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CalendarIcon className="size-8 text-white" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My Bookings
        </span>
      </NavLink>
      <NavLink
        to={AppRoutes.ownCar}
        className="group flex flex-col items-center text-white transition-colors hover:mb-3 hover:text-background-lighter"
      >
        <CarsIcon className="size-8" />
        <span className="mt-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          My Cars
        </span>
      </NavLink>
    </div>
  )
}
