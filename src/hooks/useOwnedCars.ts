// hooks/useOwnedCars.ts
import { useEffect, useState } from 'react'
import { Car } from '../type/types'
import useCars from './useCars'

export default function useOwnedCars(ownerId: number) {
  const [{ data: cars, loading, error }] = useCars()
  const [ownedCars, setOwnedCars] = useState<Car[]>([])

  useEffect(() => {
    if (cars && ownerId) {
      setOwnedCars(cars.filter(car => car.ownerId === ownerId))
    }
  }, [cars, ownerId])

  return { ownedCars, setOwnedCars, loading, error }
}
