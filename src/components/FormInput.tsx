import { useContext } from 'react'
import { FormContext } from './CarForm'
import { FormInputProps } from '../type/types'

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
