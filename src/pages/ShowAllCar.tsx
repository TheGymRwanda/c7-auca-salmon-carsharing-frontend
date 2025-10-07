import { useNavigate } from 'react-router-dom'
import BackIcon from '../assets/BackIcon'
import CarCard from '../components/CarCard'
import useCars from '../hooks/useCars'
import useCarTypes from '../hooks/useCarTypes'
import useUser from '../hooks/useUser'

function ShowAllCar() {
  const navigate = useNavigate()
  const [{ data: cars, loading: loadingCars, error: errorCars }] = useCars()
  const [{ data: carTypes, loading: loadingTypes, error: errorTypes }] = useCarTypes()
  const [{ data: owner }] = useUser(cars?.[0]?.ownerId ?? 0)

  const getCarOwnerName = (ownerId: number): string => owner?.name ?? `Owner ID: ${ownerId}`

  const getCarTypeName = (carTypeId: number): string => {
    const type = carTypes?.find(t => t.id === carTypeId)
    return type ? type.name : 'Unknown Type'
  }

  const getCarImage = (carTypeId: number): string => {
    const type = carTypes?.find(t => t.id === carTypeId)
    return type?.imageUrl ?? ''
  }

  if (loadingCars || loadingTypes)
    return <div className="mt-[150px] text-center">Loading cars...</div>
  if (errorCars || errorTypes)
    return (
      <div className="mt-[150px] text-center text-red-500">
        Failed to load cars. Please try again later.
      </div>
    )

  return (
    <div className="mt-[100px] items-center md:flex md:max-w-none md:flex-col">
      <div className="left-[17px] top-[100px] m-6 flex h-[36px] w-[356px] items-center justify-start gap-24 md:gap-40">
        <button onClick={() => navigate('/home')}>
          <BackIcon />
        </button>
        <h1 className="font-serif text-[30px] font-bold tracking-widest md:text-2xl">ALL CARS</h1>
      </div>

      <div>
        {cars?.map(car => (
          <CarCard
            key={car.id}
            name={car.name}
            owner={getCarOwnerName(car.ownerId)}
            type={getCarTypeName(car.carTypeId)}
            picture={getCarImage(car.carTypeId)}
          />
        ))}
      </div>
    </div>
  )
}

export default ShowAllCar
