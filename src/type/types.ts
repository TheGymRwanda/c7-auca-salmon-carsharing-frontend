import { ReactNode } from 'react'

export interface CarDetailsType {
  id?: number
  name: string
  owner: string
  type: string
  picture: string
}
export type OwnCardProps = CarDetailsType & {
  onDelete: (id: number) => void
}

export interface ThreeSetupProps {
  canvas: HTMLCanvasElement
  src: string
  isHovered: boolean
  isMdScreen: boolean
}

export interface ThreeCarProps {
  canvas: HTMLCanvasElement
  src: string
  isHovered: boolean
  isMdScreen: boolean
}
export interface Car {
  id: number
  name: string
  ownerId: number
  carTypeId: number
}

// type/types.ts

export interface Car {
  id: number
  name: string
  ownerId: number
  carTypeId: number
  // add other fields as needed
}

export interface CarType {
  id: number
  name: string
  imageUrl: string
}

export interface User {
  id: number
  name: string
}
export interface CarProps {
  cars: Car[]
  users: User[]
  carTypes: CarType[]
  onDelete: (carId: number) => void
}

export interface ConfirmDeleteProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export interface CarFormProps {
  formData: {
    carTypeId: string
    name: string
    fuelType: string
    horsepower: string
    licensePlate: string
    info: string
  }
  isSubmitting: boolean
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onCancel?: () => void
}

export interface MenuOptProps {
  children: ReactNode
  to: string
  closeMenu?: () => void
  isLogout?: boolean
}
