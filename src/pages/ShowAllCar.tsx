import useCars from '../hooks/useCars'
import useCarTypes from '../hooks/useCarTypes'
import { useUsers } from '../hooks'
import CarCard from '../components/CarCard'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorPage from './ErrorPage'

export default function ShowAllCar() {
  const [{ data: cars, loading: loadingCars, error: errorCars }] = useCars()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()

  const getCarOwnerName = (ownerId: number): string => {
    const owner = users?.find(u => u.id === ownerId)
    return owner ? owner.name : `Owner ID: ${ownerId}`
  }

  const getCarTypeName = (carTypeId: number): string => {
    const type = carTypes?.find(t => t.id === carTypeId)
    return type ? type.name : 'Unknown Type'
  }

  const getCarImage = (carTypeId: number): string => {
    const type = carTypes?.find(t => t.id === carTypeId)
    return type?.imageUrl ?? ''
  }

  if (loadingCars || loadingTypes || loadingUsers)
    return (
      <div>
        <LoadingSpinner />
      </div>
    )

  if (errorCars || errorTypes || errorUsers)
    return (
      <>
        <div className="mt-36 text-center text-red-500">
          Failed to load data. Please try again later.
        </div>
        <ErrorPage />
      </>
    )

  return (
    <div className="mt-24 items-center md:flex md:max-w-none md:flex-col">
      <div className="m-6 flex h-9 w-80 items-center justify-start gap-24 md:gap-40">
        <BackButton />
        <h1 className="font-serif text-3xl font-bold tracking-widest md:text-2xl">ALL CARS</h1>
      </div>

      <div>
        {cars?.map(car => {
          const name = /^[0-9]+$/.test(car.name) ? car.name.slice(0, 10) + '...' : car.name

          return (
            <CarCard
              key={car.id}
              id={car.id}
              name={name}
              owner={getCarOwnerName(car.ownerId)}
              type={getCarTypeName(car.carTypeId)}
              picture={getCarImage(car.carTypeId)}
            />
          )
        })}
      </div>
    </div>
  )
}
