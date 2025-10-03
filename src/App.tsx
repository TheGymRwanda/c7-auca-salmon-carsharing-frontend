import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import HomePage from './components/HomePage'
import AddCar from './components/AddCar '
import BookingManagement from './components/BookingManagement '
import CarDetails from './components/CarDetails '
import UserBookings from './components/UserBookings '
import CreateBooking from './components/CreateBooking '
import ErrorPage from './components/ErrorPage'

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
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/user-bookings" element={<UserBookings />} />
        <Route path="/create-booking" element={<CreateBooking />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
