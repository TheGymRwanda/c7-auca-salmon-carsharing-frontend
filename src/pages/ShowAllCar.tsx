import { useUsers, useCarTypes, useCars } from '../hooks'
import CarCard from '../components/CarCard'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorPage from './ErrorPage'
import PageWrapper from '../components/PageWrapper'
import LoadingHandler from '../components/LoadingHandler'

export default function ShowAllCar() {
  const [{ data: cars, loading: loadingCars, error: errorCars }] = useCars()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()
  const loading = loadingCars || loadingTypes || loadingUsers
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

  if (loading) return <LoadingHandler />

  if (errorCars || errorTypes || errorUsers)
    return (
      <PageWrapper pageName="all cars">
        <div className="mt-36 text-center text-red-500">
          Failed to load data. Please try again later.
        </div>
        <ErrorPage />
      </PageWrapper>
    )

  return (
    <PageWrapper pageName="all cars">
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </PageWrapper>
  )
}
