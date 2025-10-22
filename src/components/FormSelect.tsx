import { useContext } from 'react'
import { FormContext } from './CarForm'
// import { CarTypeDto } from '../util/api'

interface FormSelectProps {
  name: string
  value: string
  placeholder: string
  choices: string[]
}

export default function FormSelect({ name, value, placeholder, choices }: FormSelectProps) {
  const { onSelectChange } = useContext(FormContext)
  return (
    <select required name={name} value={value} onChange={onSelectChange} className="form-select">
      <option>{placeholder}</option>
      {choices.map(choice => (
        <option key={choice.toLowerCase()} value={`${choice.toLowerCase()}`}>
          {choice}
        </option>
      ))}
    </select>
  )
}
