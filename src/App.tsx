import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/NavBar'
import HomePage from './pages/HomePage'
import AddCar from './pages/AddCar '
import BookingManagement from './pages/BookingManagement '
import OwnCar from './pages/OwnCar'
import CarDetails from './pages/CarDetails '
import UserBookings from './pages/UserBookings '
import CreateBooking from './pages/CreateBooking '
import ErrorPage from './pages/ErrorPage'
import ShowAllCar from './pages/ShowAllCar'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/booking-management" element={<BookingManagement />} />
        <Route path="/own-car" element={<OwnCar />} />
        <Route path="/car-details/:carName" element={<CarDetails />} />
        <Route path="/user-bookings" element={<UserBookings />} />
        <Route path="/create-booking" element={<CreateBooking />} />
        <Route path="/show-all-cars" element={<ShowAllCar />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
