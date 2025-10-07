import CarGreen from '../public/images/Car-green.png'
import MoniCL from '../public/images/MONICL 1.png'
import CarBlack from '../public/images/Car-Black.png'
import BackIcon from '../assets/BackIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import { useNavigate } from 'react-router-dom'
import LicensePlate from '../assets/LicensePlate.svg'
import Icon from '../assets/Icon.svg'
import { useParams } from 'react-router-dom'

const Cars = [
  {
    name: 'Tini Titan',
    owner: 'Anna',
    type: 'Countryman',
    licensePlate: 'M-LK-3456',
    horsepower: '122hp',
    fuelType: 'Petrol',
    additionalInfo: 'No Smoking',
    picture: CarGreen,
  },
  {
    name: 'Mighty Mouse',
    owner: 'Manuela',
    type: 'Moni Cooper',
    licensePlate: 'M-AB-1234',
    horsepower: '134hp',
    fuelType: 'Petrol',
    additionalInfo: 'Sunroof included',
    picture: MoniCL,
  },
  {
    name: 'Petite Powerhouse',
    owner: 'Manuela',
    type: 'Moni Electric',
    licensePlate: 'E-CD-5678',
    horsepower: '184hp',
    fuelType: 'Electric',
    additionalInfo: 'Fast charging',
    picture: CarBlack,
  },
]

type CarType = (typeof Cars)[number]

function getCarByName(selectedCarName: string): CarType | undefined {
  return Cars.find(car => car.name === selectedCarName)
}

function CarDetails() {
  const navigate = useNavigate()
  const { carName } = useParams()
  if (!carName) {
    return <div className="mt-[200px]">No car specified!</div>
  }
  const Car = getCarByName(carName)
  if (!Car) {
    return <div className="mt-[200px]">Error!</div>
  }

  return (
    <>
      <div className="mt-[100px] max-w-sm items-center md:flex md:max-w-none md:flex-col">
        <div className="left-[17px] top-[100px] m-6 flex h-[36px] w-[356px] items-center justify-start gap-24 md:gap-40">
          <button onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
          <h1 className="w-full text-center text-[30px] font-bold tracking-widest md:text-2xl">
            DETAILS
          </h1>
        </div>
        <div>
          <div className="mt-8 flex h-[200px] w-full justify-center">
            <img className="h-full w-[95%] object-contain" src={Car.picture}></img>
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
