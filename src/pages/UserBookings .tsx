import PageWrapper from '../components/PageWrapper'
import CarGreen from '/Car-green.png'
import CarBlack from '/Car-Black.png'
import MyBookingsList from '../components/MyBookingsList'

function BookingManagement() {
  const bookings = [
    {
      img: CarGreen,
      carName: 'Might Mouse',
      ownerName: 'Manuela',
    },
    {
      img: CarBlack,
      carName: 'Black Saddan',
      ownerName: 'Boyka',
    },
    {
      img: CarGreen,
      carName: 'Tini Titan',
      ownerName: 'Manuela',
    },
    {
      img: CarBlack,
      carName: 'Baby Blue G Wagon',
      ownerName: 'Drake',
    },
  ]
  return (
    <PageWrapper pageName="my bookings">
      {bookings.map((booking, i) => (
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
