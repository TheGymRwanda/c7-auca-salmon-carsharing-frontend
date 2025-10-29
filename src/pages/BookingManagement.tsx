import PageWrapper from '../components/PageWrapper'
import CarGreen from '/Car-green.png'
import CarBlack from '/Car-Black.png'
import BookingsList from '../components/ManageBookingsList'

function BookingManagement() {
  const bookings = [
    {
      img: CarGreen,
      carName: 'Tini Titan',
      requestedName: 'Manuela',
    },
    {
      img: CarBlack,
      carName: 'Tini Titan',
      requestedName: 'Manuela',
    },
  ]
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
