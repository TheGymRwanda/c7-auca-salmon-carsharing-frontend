import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import ShowAllCar from '../pages/ShowAllCar'
import LandingPage from '../pages/Landing'
import Login from '../pages/Login'
import OwnCar from '../pages/OwnCar'
import BookingManagement from '../pages/BookingManagement'
import CarDetails from '../pages/CarDetails'
import AddCar from '../pages/AddCar'
import SearchACar from '../pages/SearchACar'
import CreateBooking from '../pages/CreateBooking'
import UserBookings from '../pages/UserBookings '

export enum AppRoutes {
  landing = '/',
  login = '/login',
  home = '/home',
  addCar = '/add-car',
  ownCar = '/own-car',
  carDetails = '/car-details/:id',
  bookingManagement = '/booking-management',
  userBookings = '/user-bookings',
  createBooking = '/create-booking',
  showAllCars = '/show-all-cars',
  availableCar = '/available-car',
  notFound = '*',
}

export const routesConfig = [
  { path: AppRoutes.home, element: <HomePage />, protected: true },
  { path: AppRoutes.addCar, element: <AddCar />, protected: true },
  { path: AppRoutes.bookingManagement, element: <BookingManagement />, protected: true },
  { path: AppRoutes.ownCar, element: <OwnCar />, protected: true },
  { path: AppRoutes.carDetails, element: <CarDetails />, protected: true },
  { path: AppRoutes.userBookings, element: <UserBookings />, protected: true },
  { path: AppRoutes.createBooking, element: <SearchACar />, protected: true },
  { path: AppRoutes.showAllCars, element: <ShowAllCar />, protected: true },
  { path: AppRoutes.availableCar, element: <CreateBooking />, protected: true },
  { path: AppRoutes.landing, element: <LandingPage /> },
  { path: AppRoutes.login, element: <Login /> },
  { path: AppRoutes.notFound, element: <ErrorPage /> },
]
