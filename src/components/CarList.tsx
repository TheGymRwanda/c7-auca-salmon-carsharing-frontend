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

  if (cars.length === 0) {
    return <p className="mt-10 text-center text-lg">You don&apos;t have any cars yet.</p>
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
