import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ErrorPage from './ErrorPage'
import { useCarTypes, useUsers } from '../hooks'
import { usedeletecar } from '../hooks/usedeletecar'
import useOwnedCars from '../hooks/useOwnedCars'
import { useState } from 'react'
import { toast } from 'react-toastify'
import PageWrapper from '../components/PageWrapper'
import LoadingHandler from '../components/LoadingHandler'
import CarList from '../components/CarList'
import ConfirmDialog from '../components/ConfirmDialog'

export default function OwnCar() {
  const navigate = useNavigate()
  const ownerId = Number(localStorage.getItem('userId'))
  const { ownedCars, setOwnedCars, loading: loadingCars, error: errorCars } = useOwnedCars(ownerId)
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()
  const loading = loadingCars || loadingTypes || loadingUsers

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

  if (loading) return <LoadingHandler />

  if (errorCars || errorTypes || errorUsers)
    return (
      <PageWrapper pageName="all cars">
        <div className="text-center text-red-500">Failed to load data. Please try again later.</div>
        <div className="-mt-36">
          <ErrorPage />
        </div>
      </PageWrapper>
    )

  return (
    <PageWrapper pageName="my cars">
      {ownedCars.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center text-gray-100">
          <p className="text-lg font-medium md:text-xl">You don&apos;t have any cars yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Start by adding your first car to manage it here.
          </p>
        </div>
      )}
      {ownedCars.length > 0 && (
        <div className="grid grid-cols-1 place-items-center gap-4  md:grid-cols-2 lg:grid-cols-3">
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
    </PageWrapper>
  )
}
