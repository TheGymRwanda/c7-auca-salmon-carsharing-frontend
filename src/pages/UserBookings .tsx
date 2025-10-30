import PageWrapper from '../components/PageWrapper'
import MyBookingsList from '../components/MyBookingsList'
import { booking, bookings } from '../util/bookings'

function BookingManagement() {
  return (
    <PageWrapper pageName="my bookings">
      {booking.map((booking, i) => (
        <div key={booking.carName} className={i < bookings.length - 1 ? 'border-b pb-5' : ''}>
          <MyBookingsList
            img={booking.img}
            carName={booking.carName}
            ownerName={booking.ownerName}
            index={i}
          />
        </div>
      ))}
    </PageWrapper>
  )
}

export default BookingManagement
