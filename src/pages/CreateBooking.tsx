import { useState } from 'react'
import ConfirmDialog from '../components/ConfirmDialog'
import OwnCard from '../components/OwnCard'
import cars from '../util/car'
import PageWrapper from '../components/PageWrapper'

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
    <PageWrapper pageName="AVAILABLE CARS">
      <div className="mt-10 flex items-center justify-center md:flex md:max-w-none md:flex-col">
        <div className="md:w-200 flex flex-wrap items-center justify-between ">
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
    </PageWrapper>
  )
}
