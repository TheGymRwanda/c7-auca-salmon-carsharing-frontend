import { useNavigate } from 'react-router-dom'
import BackIcon from '../assets/BackIcon'
import OwnCard from '../components/OwnCard'
import CarGreen from '../public/images/Car-green.png'
import Blackcar from '../public/images/Car-Black.png'

function OwnCar() {
  const navigate = useNavigate()
  const cars = [
    { name: 'Tini Titan', owner: 'Anna', type: 'Countryman', picture: Blackcar },

    { name: 'Petitle Powerhouse', owner: 'Manuela', type: 'Moni Electric', picture: CarGreen },
  ]

  return (
    <div className="mt-[100px] items-center md:flex md:max-w-none md:flex-col">
      <div className="left-[17px] top-[100px] m-6 flex h-[36px] w-[356px] items-center justify-start gap-24 md:gap-40">
        <button>
          <BackIcon />
        </button>
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

      <div className="mb-10 mt-2 w-[400px] p-4 md:w-[400px] ">
        <button className="btn btn-primary  " onClick={() => navigate('/add-car')}>
          {' '}
          Add new Car
        </button>
      </div>
    </div>
  )
}

export default OwnCar
