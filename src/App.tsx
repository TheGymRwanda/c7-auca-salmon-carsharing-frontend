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
import LandingPage from './pages/Landing'
import Login from './pages/Login'
import { useLocation } from 'react-router-dom'
// Axios hooks configuration
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function AppContent(): ReactElement {
  const location = useLocation()

  // Hide navbar on these routes
  const hideNavbarRoutes = ['/login', '/landingpage']

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname.toLowerCase())

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/booking-management" element={<BookingManagement />} />
        <Route path="/own-car" element={<OwnCar />} />
        <Route path="/car-details/:carName" element={<CarDetails />} />
        <Route path="/user-bookings" element={<UserBookings />} />
        <Route path="/create-booking" element={<CreateBooking />} />
        <Route path="/show-all-cars" element={<ShowAllCar />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

function App(): ReactElement {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
