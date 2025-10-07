import CarGreen from '../public/images/Car-green.png'
import BackIcon from '../assets/BackIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import { useNavigate } from 'react-router-dom'
import LicensePlate from '../assets/LicensePlate.svg'
import Icon from '../assets/Icon.svg'

function CarDetails() {
  const navigate = useNavigate()

  const Car = {
    name: 'Tini Titan',
    owner: 'Anna',
    type: 'Countryman',
    licensePlate: 'M-LK-3456',
    horsepower: '122hp',
    fuelType: 'Petrol',
    additionalInfo: 'No Smoking',
    image: CarGreen,
  }

  return (
    <>
      <div className="mx-10 font-serif">
        <div className="relative flex">
          <button className="absolute" onClick={() => navigate('/show-all-cars')}>
            <BackIcon />
          </button>
          <h1 className="w-full text-center text-[30px] font-bold tracking-widest md:text-2xl">
            DETAILS
          </h1>
        </div>
        <div>
          <div className="mt-8 flex h-[200px] w-full justify-center">
            <img className="h-full w-[95%] object-contain" src={Car.image}></img>
          </div>
          <div>
            <h1 className="text-xl">{Car.name}</h1>
          </div>
          <div className="my-8">
            <h2 className="mb-1 flex">
              <ProfileIcon />
              <span className="ml-2">{Car.owner}</span>
            </h2>
            <h2 className="mb-1 flex">
              <CarIcon />
              <span className="ml-2">{Car.type}</span>
            </h2>
            <h2 className="mb-1 flex">
              <img src={LicensePlate} alt="license plate svg" />
              <span className="ml-2">{Car.licensePlate}</span>
            </h2>
            <h2 className="mb-1 flex">
              <HorseIcon />
              <span className="ml-2">{Car.horsepower}</span>
            </h2>
            <h2 className="mb-1 flex">
              <FuelIcon />
              <span className="ml-2">{Car.fuelType}</span>
            </h2>
            <h2 className="mb-1 flex">
              <img src={Icon} alt="license plate svg" />
              <span className="ml-2">{Car.additionalInfo}</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarDetails
