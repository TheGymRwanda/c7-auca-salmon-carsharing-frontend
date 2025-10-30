import { useMemo } from 'react'
import { useCarTypes } from '.'

export default function useCarTypeOptions() {
  const [{ data: carTypes }] = useCarTypes()

  const carTypeNames = useMemo(() => carTypes?.map(type => type.name) || [], [carTypes])

  return carTypeNames
}
