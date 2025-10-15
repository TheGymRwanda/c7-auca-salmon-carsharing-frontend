import { useNavigate } from 'react-router-dom'
import OwnCard from '../components/OwnCard'
import cars from '../util/car'
import BackButton from '../components/BackButton'
import Button from '../components/Button'

export default function OwnCar() {
  const navigate = useNavigate()

  return (
    <div className="mt-24 items-center text-gray-300 md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start gap-24 md:gap-40">
        <BackButton />
        <h1 className="font-serif text-3xl font-bold tracking-widest md:text-2xl">MY CARS</h1>
      </div>

      <div>
        {cars?.map(car => (
          <OwnCard
            key={car.name}
            name={car.name}
            owner={car.owner}
            type={car.type}
            picture={car.picture}
          />
        ))}
      </div>

      <div className="mb-10 mt-2 p-4 md:w-[400px] ">
        <Button variant="primary" onClick={() => navigate('/add-car')}>
          Add new Car
        </Button>
      </div>
    </div>
  )
}
