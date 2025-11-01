import { ProfileIcon, CarIcon, HorseIcon, FuelIcon, LicensePlate, Icon } from '../assets/index'
import { useParams } from 'react-router-dom'
import useCars from '../hooks/useCars'
import useCarTypes from '../hooks/useCarTypes'
import useUser from '../hooks/useUser'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'
import PageWrapper from '../components/PageWrapper'
import InteractiveCarImage from '../components/InteractiveCarImage'

export default function CarDetails() {
  const { id } = useParams()
  const [{ data: cars, loading: loadingCars }] = useCars()
  const [{ data: carTypes }] = useCarTypes()

  const car = cars?.find(c => c.id === Number(id))
  const [{ data: owner }] = useUser(car?.ownerId ?? 0)

  if (loadingCars)
    return (
      <PageWrapper pageName="details">
        <LoadingSpinner />
      </PageWrapper>
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
    <PageWrapper pageName="details">
      <div className="md:grid md:grid-cols-2">
        <div className="flex h-72  justify-center">
          <InteractiveCarImage src={carImage} alt={car.name} />
        </div>
        <div className="mx-10">
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
            <p className="flex items-center md:max-w-sm">
              <img src={Icon} alt="info" />
              <span className="ml-2">{car.info || 'No additional info'}</span>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
