import { useNavigate } from 'react-router-dom'
import OwnCard from '../components/OwnCard'
import cars from '../util/car'
import BackButton from '../components/BackButton'

export default function OwnCar() {
  const navigate = useNavigate()

  return (
    <div className="mt-[100px] items-center md:flex md:max-w-none md:flex-col">
      <div className="left-[17px] top-[100px] m-6 flex h-[36px] w-[356px] items-center justify-start gap-24 md:gap-40">
        <BackButton />
        <h1 className="font-serif text-[30px] font-bold tracking-widest md:text-2xl">MY CARS</h1>
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
        <button className="btn btn-primary  " onClick={() => navigate('/add-car')}>
          {' '}
          Add new Car
        </button>
      </div>
    </div>
  )
}
