import { CarProps } from '../type/types'
import OwnCard from './OwnCard'

export default function CarList({ cars, users, carTypes, onDelete }: CarProps) {
  const getCarOwnerName = (ownerId: number): string => {
    const owner = users.find(u => u.id === ownerId)
    return owner ? owner.name : `Owner ID: ${ownerId}`
  }

  const getCarTypeName = (carTypeId: number): string => {
    const type = carTypes.find(t => t.id === carTypeId)
    return type ? type.name : 'Unknown Type'
  }

  const getCarImage = (carTypeId: number): string => {
    const type = carTypes.find(t => t.id === carTypeId)
    return type?.imageUrl ?? ''
  }

  return (
    <>
      {cars.map(car => (
        <OwnCard
          key={car.id}
          {...car}
          owner={getCarOwnerName(car.ownerId)}
          type={getCarTypeName(car.carTypeId)}
          picture={getCarImage(car.carTypeId)}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}
