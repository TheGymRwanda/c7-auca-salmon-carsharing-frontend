import { ProfileIcon, CarIcon, HorseIcon, FuelIcon, LicensePlate, Icon } from '../assets/index'
import { useParams } from 'react-router-dom'
import useCars from '../hooks/useCars'
import useCarTypes from '../hooks/useCarTypes'
import useUser from '../hooks/useUser'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'

export default function CarDetails() {
  const { id } = useParams()
  const [{ data: cars, loading: loadingCars }] = useCars()
  const [{ data: carTypes }] = useCarTypes()

  const car = cars?.find(c => c.id === Number(id))
  const [{ data: owner }] = useUser(car?.ownerId ?? 0)

  if (loadingCars)
    return (
      <div className="mt-36 text-center">
        <LoadingSpinner />
      </div>
    )
  if (!car)
    return (
      <div className="mt-36 text-center text-2xl text-red-500">
        Car not found! <BackButton />
      </div>
    )

  const carType = carTypes?.find(t => t.id === car.carTypeId)
  const carImage = carType?.imageUrl ?? ''

  return (
    <div className="mt-24 max-w-sm items-center md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start md:gap-40">
        <BackButton />
        <h1 className="w-full text-center text-3xl font-bold tracking-widest md:text-2xl">
          DETAILS
        </h1>
      </div>

      <div>
        <div className="mt-8 flex h-[300px]  justify-center">
          <img className="h-full w-[95%] object-contain" src={carImage} alt={car.name} />
        </div>

        <div className="m-10">
          <h1 className="text-xl font-semibold">{car.name}</h1>

          <div className="mt-4 space-y-2">
            <p className="flex items-center">
              <ProfileIcon />
              <span className="ml-2">{owner?.name ?? `Owner ID: ${car.ownerId}`}</span>
            </p>
            <p className="flex items-center">
              <CarIcon />
              <span className="ml-2">{carType?.name ?? 'Unknown Type'}</span>
            </p>
            <p className="flex items-center">
              <img src={LicensePlate} alt="license plate" />
              <span className="ml-2">{car.licensePlate ?? 'No license plate'}</span>
            </p>
            <p className="flex items-center">
              <HorseIcon />
              <span className="ml-2">{car.horsepower} HP</span>
            </p>
            <p className="flex items-center">
              <FuelIcon />
              <span className="ml-2 capitalize">{car.fuelType}</span>
            </p>
            <p className="flex items-center">
              <img src={Icon} alt="info" />
              <span className="ml-2">{car.info || 'No additional info'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
