import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import ErrorPage from './ErrorPage'
import LoadingSpinner from '../components/LoadingSpinner'
import { useCarTypes, useUsers } from '../hooks'
import { usedeletecar } from '../hooks/usedeletecar'
import DeleteConfirmDialog from '../components/DeleteConfirmDialog'
import useOwnedCars from '../hooks/useOwnedCars'
import CarList from '../components/CarList'
import { useState } from 'react'

export default function OwnCar() {
  const navigate = useNavigate()
  const ownerId = Number(localStorage.getItem('userId'))
  const { ownedCars, setOwnedCars, loading, error } = useOwnedCars(ownerId)
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()

  const [selectedCarId, setSelectedCarId] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleRequestDelete = (carId: number) => {
    setSelectedCarId(carId)
    setIsDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (selectedCarId == null) return
    try {
      await usedeletecar(selectedCarId)
      setOwnedCars(prev => prev.filter(car => car.id !== selectedCarId))
      setMessage('Car deleted successfully.')
    } catch (error) {
      console.error(error)
      setMessage('Failed to delete the car.')
    } finally {
      setIsDialogOpen(false)
      setSelectedCarId(null)
      setTimeout(() => setMessage(null), 4000)
    }
  }

  const handleCancelDelete = () => {
    setIsDialogOpen(false)
    setSelectedCarId(null)
  }

  if (loading || loadingTypes || loadingUsers) return <LoadingSpinner />
  if (error || errorTypes || errorUsers) return <ErrorPage />

  return (
    <div className="mt-24 items-center text-gray-300 md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start gap-24 md:gap-40">
        <BackButton />
        <h1 className="font-serif text-3xl font-bold tracking-widest md:text-2xl">MY CARS</h1>
      </div>

      {message && <div className="mb-4 text-center text-sm text-green-400">{message}</div>}

      <CarList
        cars={ownedCars}
        users={users ?? []}
        carTypes={carTypes ?? []}
        onDelete={handleRequestDelete}
      />

      <div className="md:w-76 mb-10 mt-2 p-4">
        <Button variant="primary" onClick={() => navigate('/add-car')}>
          Add new Car
        </Button>
      </div>

      <DeleteConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  )
}
