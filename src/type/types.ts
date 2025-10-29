import { ReactNode } from 'react'

export interface CarDetailsType {
  id?: number
  name: string
  owner: string
  type: string
  picture: string
}
export type OwnCardProps = CarDetailsType & {
  buttonLabel: string
  onAction?: (id?: number) => void
  buttonVariant?: 'outline' | 'outline2' | 'primary' | 'secondary'
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
  onAction?: (carId: number) => void
}

export interface ConfirmDeleteProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  type?: 'delete' | 'book'
  title?: string
  message?: string
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

export interface TimePickerProps {
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onTimeChange: (time: { hours: number; minutes: number; isPM: boolean }) => void
}

export interface ActionButtonsProps {
  onCancel?: () => void
  onConfirm: () => void
  confirmLabel?: string
  cancelLabel?: string
}

export interface CalendarProps {
  currentDate: Date
  onDateChange: (date: Date) => void
  onPreviousMonth: () => void
  onNextMonth: () => void
}

export interface DateTimeHeaderProps {
  currentDate: Date
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onAMPMToggle: (isPM: boolean) => void
}
export interface DateTimePickerProps {
  onDateTimeSelect?: (dateTime: Date) => void
  onCancel?: () => void
}

export interface FormInputProps {
  name: string
  value: string
  placeholder: string
}
export interface FormSelectProps {
  name: string
  value: string
  placeholder: string
  choices: string[]
}

export interface HeaderProps {
  children: React.ReactNode
}

export interface LoadingSpinnerProps {
  message?: string
  fullscreen?: boolean
}

export interface MenuOptProps {
  children: ReactNode
  to: string
  closeMenu?: () => void
  isLogout?: boolean
}

export interface TimePickerProps {
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onTimeChange: (time: { hours: number; minutes: number; isPM: boolean }) => void
}

export interface ActionButtonsProps {
  onCancel?: () => void
  onConfirm: () => void
  confirmLabel?: string
  cancelLabel?: string
}

export interface CalendarProps {
  currentDate: Date
  onDateChange: (date: Date) => void
  onPreviousMonth: () => void
  onNextMonth: () => void
}

export interface DateTimeHeaderProps {
  currentDate: Date
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onAMPMToggle: (isPM: boolean) => void
}
export interface DateTimePickerProps {
  onDateTimeSelect?: (dateTime: Date) => void
  onCancel?: () => void
}

export interface FormInputProps {
  name: string
  value: string
  placeholder: string
}
export interface FormSelectProps {
  name: string
  value: string
  placeholder: string
  choices: string[]
}

export interface HeaderProps {
  children: React.ReactNode
}

export interface LoadingSpinnerProps {
  message?: string
  fullscreen?: boolean
}

export interface SearchACarProps {
  onSearch?: (startDate: Date, endDate: Date) => void
}

export interface TimePickerProps {
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onTimeChange: (time: { hours: number; minutes: number; isPM: boolean }) => void
}

export interface ActionButtonsProps {
  onCancel?: () => void
  onConfirm: () => void
  confirmLabel?: string
  cancelLabel?: string
}

export interface CalendarProps {
  currentDate: Date
  onDateChange: (date: Date) => void
  onPreviousMonth: () => void
  onNextMonth: () => void
}

export interface DateTimeHeaderProps {
  currentDate: Date
  selectedTime: { hours: number; minutes: number; isPM: boolean }
  onAMPMToggle: (isPM: boolean) => void
}
export interface DateTimePickerProps {
  onDateTimeSelect?: (dateTime: Date) => void
  onCancel?: () => void
}

export interface FormInputProps {
  name: string
  value: string
  placeholder: string
}
export interface FormSelectProps {
  name: string
  value: string
  placeholder: string
  choices: string[]
}

export interface HeaderProps {
  children: React.ReactNode
}

export interface LoadingSpinnerProps {
  message?: string
  fullscreen?: boolean
}
