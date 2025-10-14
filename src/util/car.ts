import CarGreen from '../../public/images/Car-green.png'
import Blackcar from '../../public/images/Car-Black.png'
import { CarDetailsType } from '../type/types'

const cars: CarDetailsType[] = [
  { id: 1, name: 'Tini Titan', owner: 'Anna', type: 'Countryman', picture: Blackcar },
  { id: 2, name: 'Petitle Powerhouse', owner: 'Manuela', type: 'Moni Electric', picture: CarGreen },
]

export default cars
