import Header from '../components/Header'
import OwnCard from '../components/OwnCard'
import cars from '../util/car'

export default function CreateBooking() {
  const handleBookCar = (id?: number) => {
    if (id === undefined) return
    // Add booking logic instead of console.log
  }

  return (
    <div className="mt-20 items-center md:flex md:max-w-none md:flex-col">
      <Header>AVAILABLE CARS</Header>
      <div className="md:w-200 flex flex-wrap justify-between ">
        {cars.map(car => (
          <OwnCard
            key={car.id}
            {...car}
            buttonLabel="Book a car"
            onAction={handleBookCar}
            buttonVariant="primary"
          />
        ))}
      </div>
    </div>
  )
}
