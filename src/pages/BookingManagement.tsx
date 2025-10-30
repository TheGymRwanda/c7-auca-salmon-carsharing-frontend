import PageWrapper from '../components/PageWrapper'
import BookingsList from '../components/ManageBookingsList'
import { bookings } from '../util/bookings'

function BookingManagement() {
  return (
    <PageWrapper pageName="manage bookings">
      {bookings.map((booking, i) => (
        <div key={booking.carName} className={i < bookings.length - 1 ? 'border-b pb-5' : ''}>
          <BookingsList
            img={booking.img}
            carName={booking.carName}
            requestedName={booking.requestedName}
          />
        </div>
      ))}
    </PageWrapper>
  )
}

export default BookingManagement
