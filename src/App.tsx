import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import ShowAllCar from './pages/ShowAllCar'
import LandingPage from './pages/Landing'
import Login from './pages/Login'
import AddCar from './pages/AddCar '
import BookingManagement from './pages/BookingManagement '
import CarDetails from './pages/CarDetails '
import UserBookings from './pages/UserBookings '
import CreateBooking from './pages/CreateBooking '
import OwnCar from './pages/OwnCar'

// Axios hooks configuration
configure({ defaultOptions: { autoCancel: false } })

function AppContent(): ReactElement {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/booking-management" element={<BookingManagement />} />
      <Route path="/own-car" element={<OwnCar />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/user-bookings" element={<UserBookings />} />
      <Route path="/create-booking" element={<CreateBooking />} />
      <Route path="/show-all-cars" element={<ShowAllCar />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

function App(): ReactElement {
  return <AppContent />
}

export default App
