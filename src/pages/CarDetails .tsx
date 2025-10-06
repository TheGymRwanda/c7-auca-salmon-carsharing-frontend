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
          <h1 className="text-[30px] font-bold tracking-widest md:text-2xl text-center w-full">
            DETAILS
          </h1>
        </div>
        <div>
          <div className="h-[200px] w-full flex justify-center my-8">
            <img className="w-[95%] h-full object-contain" src={Car.image}></img>
          </div>
          <div>
            <h1 className="text-xl">{Car.name}</h1>
          </div>
          <div className="my-8">
            <h2 className="flex mb-1">
              <ProfileIcon />
              <span className="ml-2">{Car.owner}</span>
            </h2>
            <h2 className="flex mb-1">
              <CarIcon />
              <span className="ml-2">{Car.type}</span>
            </h2>
            <h2 className="flex mb-1">
              <img src={LicensePlate} alt="license plate svg" />
              <span className="ml-2">{Car.licensePlate}</span>
            </h2>
            <h2 className="flex mb-1">
              <HorseIcon />
              <span className="ml-2">{Car.horsepower}</span>
            </h2>
            <h2 className="flex mb-1">
              <FuelIcon />
              <span className="ml-2">{Car.fuelType}</span>
            </h2>
            <h2 className="flex mb-1">
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
