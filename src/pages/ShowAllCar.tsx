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
    <div className="mt-[100px] max-w-sm md:max-w-none md:flex md:flex-col items-center">
      <div className="flex items-center justify-start m-6 w-[356px] h-[36px] gap-24 md:gap-40 top-[100px] left-[17px]">
        <button onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
        <h1 className="text-[30px] md:text-2xl font-serif font-bold tracking-widest">ALL CARS</h1>
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
