import { useNavigate } from 'react-router-dom'
import BackIcon from '../assets/BackIcon'
import MoniCL from '../public/images/MONICL 1.png'
import CarGreen from '../public/images/Car-green.png'
import CarBlack from '../public/images/Car-Black.png'
import CarCard from '../components/CarCard'

function ShowAllCar() {
  const navigate = useNavigate()

  const Cars = [
    { name: 'Mighty Mouse', owner: 'Manuela', type: 'Moni Cooper', picture: MoniCL },
    { name: 'Tini Titan', owner: 'Anna', type: 'Countryman', picture: CarGreen },
    { name: 'Petite Powerhouse', owner: 'Manuela', type: 'Moni Electric', picture: CarBlack },
  ]

  return (
    <div className="mt-[100px] max-w-sm items-center md:flex md:max-w-none md:flex-col">
      <div className="left-[17px] top-[100px] m-6 flex h-[36px] w-[356px] items-center justify-start gap-24 md:gap-40">
        <button onClick={() => navigate('/')}>
          <BackIcon />
        </button>
        <h1 className="font-serif text-[30px] font-bold tracking-widest md:text-2xl">ALL CARS</h1>
      </div>

      {/* Car list */}
      <div>
        {Cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            owner={car.owner}
            type={car.type}
            picture={car.picture}
          />
        ))}
      </div>
    </div>
  )
}

export default ShowAllCar
