import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import ErrorPage from './ErrorPage'
import LoadingSpinner from '../components/LoadingSpinner'
import { useCarTypes, useUsers } from '../hooks'
import { usedeletecar } from '../hooks/usedeletecar'
import useOwnedCars from '../hooks/useOwnedCars'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CarList from '../components/CarList'
import ConfirmDialog from '../components/ConfirmDialog'

export default function OwnCar() {
  const navigate = useNavigate()
  const ownerId = Number(localStorage.getItem('userId'))
  const { ownedCars, setOwnedCars, loading, error } = useOwnedCars(ownerId)
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()

  const [selectedCarId, setSelectedCarId] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleRequestDelete = (carId: number) => {
    setSelectedCarId(carId)
    setIsDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (selectedCarId == null) return
    try {
      await usedeletecar(selectedCarId)
      setOwnedCars(prev => prev.filter(car => car.id !== selectedCarId))
      toast.success('Car deleted successfully.')
    } catch (error) {
      toast.error('Failed to delete the car.')
    } finally {
      setIsDialogOpen(false)
      setSelectedCarId(null)
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
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start gap-24 md:w-96 md:gap-20">
        <BackButton />
        <h1 className="font-serif text-3xl font-bold tracking-widest md:text-2xl">MY CARS</h1>
      </div>

      {ownedCars.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center text-gray-300">
          <p className="text-lg font-medium md:text-xl">You don’t have any cars yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Start by adding your first car to manage it here.
          </p>
        </div>
      )}
      {ownedCars.length > 0 && (
        <div className="grid grid-cols-1 place-items-center gap-6  md:grid-cols-2 lg:grid-cols-3">
          <CarList
            cars={ownedCars}
            users={users ?? []}
            carTypes={carTypes ?? []}
            onAction={handleRequestDelete}
          />
        </div>
      )}

      <div className="md:w-76 mb-10 mt-2 p-4">
        <Button variant="primary" onClick={() => navigate('/add-car')}>
          Add new Car
        </Button>
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        type="delete"
        title="Delete Car"
        message="Are you sure you want to delete this car?"
      />
    </div>
  )
}
