import { useCarTypeOptions } from '../hooks'
import { CarFormProps } from '../type/types'
import { ChevronDownIcon } from '../assets'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import React from 'react'

export const FormContext = React.createContext<{
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}>({ onInputChange: () => {}, onSelectChange: () => {} })

export default function CarForm({
  formData,
  isSubmitting,
  onSelectChange,
  onInputChange,
  onSubmit,
  onCancel,
}: CarFormProps) {
  const fuelTypes = ['Diesel', 'Petrol', 'Electric']
  //   const [{ data: carTypes }] = useCarTypes()
  const carTypeNames = useCarTypeOptions()
  return (
    <FormContext.Provider value={{ onInputChange, onSelectChange }}>
      <form onSubmit={onSubmit} className="[&_label]:ml-4 [&_label]:mb-1">
        <div className="flex flex-col">
          <label>Name</label>
          <FormInput name="name" value={formData.name} placeholder="e.g. My Nice Moni Car" />
        </div>
        <div className="flex flex-col relative">
          <label>Type</label>
          <FormSelect
            name="carTypeId"
            value={formData.carTypeId}
            placeholder="Select Car Type"
            choices={carTypeNames}
          />
          <div className="select-arrow">
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label>License Plate</label>
            <FormInput
              name="licensePlate"
              value={formData.licensePlate}
              placeholder="e.g. M-XY 123"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Horse Power</label>
            <FormInput name="horsepower" value={formData.horsepower} placeholder="110" />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label>Fuel Type</label>
          <FormSelect
            name="fuelType"
            value={formData.fuelType}
            placeholder="Choose a fuel type"
            choices={fuelTypes}
          />
          <div className="select-arrow">
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Additional Information</label>
          <FormInput name="info" value={formData.info} placeholder="e.g. No Smoking" />
        </div>
        <div className="mt-16 flex gap-4">
          <button onClick={onCancel} className="btn-form border-2 border-white">
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn-form bg-white text-background"
          >
            {isSubmitting ? 'Adding...' : 'Add Car'}
          </button>
        </div>
      </form>
    </FormContext.Provider>
  )
}
