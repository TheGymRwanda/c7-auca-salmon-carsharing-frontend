import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './Components/HomePage '
import AddCar from './Components/AddCar '
import BookingManagement from './Components/BookingManagement '
import CarDetails from './Components/CarDetails '
import UserBookings from './Components/UserBookings '
import CreateBooking from './Components/CreateBooking '
import ErrorPage from './Components/ErrorPage '

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <Router>
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
