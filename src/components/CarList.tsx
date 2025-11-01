import { CarProps } from '../type/types'
import OwnCard from './OwnCard'

export default function CarList({
  cars,
  users,
  carTypes,
  onAction,
}: CarProps & { onAction?: (carId: number) => void }) {
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

  const handleAction = (id?: number) => {
    if (id === undefined || !onAction) return
    onAction(id)
  }

  return (
    <>
      {cars.map((car, index) => (
        <>
          {index === 0 && <div className="mt-1"></div>}
          <OwnCard
            key={car.id}
            {...car}
            owner={getCarOwnerName(car.ownerId)}
            type={getCarTypeName(car.carTypeId)}
            picture={getCarImage(car.carTypeId)}
            buttonVariant="outline2"
            buttonLabel="Delete"
            onAction={handleAction}
          />
        </>
      ))}
    </>
  )
}
