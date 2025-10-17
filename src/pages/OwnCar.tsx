import { useNavigate } from 'react-router-dom'
import OwnCard from '../components/OwnCard'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import { useCars, useCarTypes, useUsers } from '../hooks'
import ErrorPage from './ErrorPage'
import LoadingSpinner from '../components/LoadingSpinner'

export default function OwnCar() {
  const navigate = useNavigate()
  const [{ data: cars, loading: loadingCars, error: errorCars }] = useCars()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()
  const [{ data: users, loading: loadingUsers, error: errorUsers }] = useUsers()
  const ownerId = localStorage.getItem('userId')
  const userCars = cars?.filter(car => car.ownerId === Number(ownerId))
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
    <div className="mt-24 items-center text-gray-300 md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start gap-24 md:gap-40">
        <BackButton />
        <h1 className="font-serif text-3xl font-bold tracking-widest md:text-2xl">MY CARS</h1>
      </div>

      <div>
        {userCars?.map(car => (
          <OwnCard
            key={car.name}
            name={car.name}
            id={car.id}
            owner={getCarOwnerName(car.ownerId)}
            type={getCarTypeName(car.carTypeId)}
            picture={getCarImage(car.carTypeId)}
          />
        ))}
      </div>

      <div className="md:w-76 mb-10 mt-2 p-4 ">
        <Button variant="primary" onClick={() => navigate('/add-car')}>
          Add new Car
        </Button>
      </div>
    </div>
  )
}
