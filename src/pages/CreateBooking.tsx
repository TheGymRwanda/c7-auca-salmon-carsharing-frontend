import { useState } from 'react'
import ConfirmDialog from '../components/ConfirmDialog'
import Header from '../components/Header'
import OwnCard from '../components/OwnCard'
import cars from '../util/car'

export default function CreateBooking() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null)

  const handleBookCar = (id?: number) => {
    if (id === undefined) return
    setSelectedCarId(id)
    setIsDialogOpen(true)
  }

  const handleConfirmBooking = () => {
    setIsDialogOpen(false)
    setSelectedCarId(null)
  }

  const handleCancelAdd = () => {
    setIsDialogOpen(false)
    setSelectedCarId(null)
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
      <ConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmBooking}
        onCancel={handleCancelAdd}
        type="book"
        title="Confirm Booking"
        message={`Do you want to confirm booking this car?${selectedCarId ? ` (Car ID: ${selectedCarId})` : ''}`}
      />
    </div>
  )
}
