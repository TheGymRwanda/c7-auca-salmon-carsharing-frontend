import CarGreen from '/Car-green.png'
import Blackcar from '/Car-Black.png'
import MONICL from '/MONICL 1.png'
import { CarDetailsType } from '../type/types'
const cars: CarDetailsType[] = [
  { id: 1, name: 'Might Mouse', owner: 'Manuela', type: 'Moni Cooper', picture: MONICL },
  { id: 2, name: 'Tini Titan', owner: 'Anna', type: 'Countryman', picture: Blackcar },
  { id: 3, name: 'Petitle Powerhouse', owner: 'Manuela', type: 'Moni Electric', picture: CarGreen },
]

export default cars
