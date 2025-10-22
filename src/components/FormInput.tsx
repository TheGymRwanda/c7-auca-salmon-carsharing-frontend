import { useContext } from 'react'
import { FormContext } from './CarForm'

interface FormInputProps {
  name: string
  value: string
  placeholder: string
}

export default function FormInput({ name, value, placeholder }: FormInputProps) {
  const { onInputChange } = useContext(FormContext)
  return (
    <input
      required
      type="text"
      name={name}
      value={value}
      onChange={onInputChange}
      placeholder={placeholder}
      className="form-input"
    />
  )
}
