import {
  CalendarIcon,
  CarIcon,
  CarPlusIcon,
  CarsIcon,
  ListIcon,
  LogoutIcon,
  PlusIcon,
} from '../assets/index'
import { useNavigate } from 'react-router-dom'

export default function NavMenuList({ closeMenu }: { closeMenu?: () => void }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="space-y-1 p-4">
        <button
          onClick={() => {
            navigate('/show-all-cars')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg bg-slate-700 px-4 py-3 text-left text-white transition-colors hover:bg-slate-600"
        >
          <CarPlusIcon className="size-5" />
          <span className="text-sm font-medium">Show All Car</span>
        </button>

        <button
          onClick={() => {
            navigate('/create-booking')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-600"
        >
          <CarIcon className="size-5" />
          <span className="text-sm font-medium">Book A Car</span>
        </button>

        <button
          onClick={() => {
            navigate('/user-bookings')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white hover:bg-slate-700"
        >
          <CalendarIcon className="text-white" />
          <span className="text-sm font-medium">My Bookings</span>
        </button>

        <div className="my-4 border-t border-gray-100" />
        <div className="px-4 py-2">
          <h3 className="text-sm font-semibold text-white">My Cars</h3>
        </div>

        <button
          onClick={() => {
            navigate('/own-car')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-700"
        >
          <CarsIcon />
          <span className="text-sm font-medium">See My Cars</span>
        </button>

        <button
          onClick={() => {
            navigate('/booking-management')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-700"
        >
          <ListIcon />
          <span className="text-sm font-medium">My Car&apos;s Bookings</span>
        </button>

        <button
          onClick={() => {
            navigate('/add-car')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-700"
        >
          <PlusIcon className="size-5" />
          <span className="text-sm font-medium">Add New Car</span>
        </button>

        <div className="my-4 border-t border-gray-100" />
        <button
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            navigate('/')
            closeMenu && closeMenu()
          }}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white transition-colors hover:bg-slate-700"
        >
          <LogoutIcon />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </>
  )
}
