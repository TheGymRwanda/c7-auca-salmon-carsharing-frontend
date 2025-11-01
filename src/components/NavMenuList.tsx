import {
  CalendarIcon,
  CarIcon,
  CarPlusIcon,
  CarsIcon,
  ListIcon,
  LogoutIcon,
  PlusIcon,
} from '../assets/index'
import MenuOpt from './MenuOpt'

export default function NavMenuList({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <div className="space-y-1 p-2">
      <MenuOpt to="/show-all-cars" closeMenu={closeMenu}>
        <CarIcon className="size-5" />
        <span>Show All Car</span>
      </MenuOpt>
      <MenuOpt to="/create-booking" closeMenu={closeMenu}>
        <CarPlusIcon className="size-5" />
        <span>Book A car</span>
      </MenuOpt>
      <MenuOpt to="/user-bookings" closeMenu={closeMenu}>
        <CalendarIcon className="size-5" />
        <span>My Bookings</span>
      </MenuOpt>
      <div className="my-4 border-t border-gray-100" />
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-white">My Cars</h3>
      </div>
      <MenuOpt to="/own-car" closeMenu={closeMenu}>
        <CarsIcon className="size-5" />
        <span>See My Cars</span>
      </MenuOpt>
      <MenuOpt to="/booking-management" closeMenu={closeMenu}>
        <ListIcon className="size-5" />
        <span>My Car&apos;s Bookings</span>
      </MenuOpt>
      <MenuOpt to="/add-car" closeMenu={closeMenu}>
        <PlusIcon className="size-5" />
        <span>Add New Car</span>
      </MenuOpt>
      <div className="my-4 border-t border-gray-100" />
      <MenuOpt to="/" closeMenu={closeMenu} isLogout>
        <LogoutIcon className="size-5" />
        <span>Log Out</span>
      </MenuOpt>
    </div>
  )
}
