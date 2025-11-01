import { ChangeEvent, createContext } from 'react'
import { useCarTypes } from '../hooks'
import { CarFormProps } from '../type/types'
import { ChevronDownIcon } from '../assets'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

export const FormContext = createContext<{
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
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
  const [{ data: carTypes }] = useCarTypes()

  return (
    <FormContext.Provider value={{ onInputChange, onSelectChange }}>
      {/* [&_label]:mb-1 [&_label]:ml-4 applies margin and padding to  all the labels */}
      <form onSubmit={onSubmit} className="[&_label]:mb-1 [&_label]:ml-4">
        <div className="flex flex-col">
          <label>Name</label>
          <FormInput name="name" value={formData.name} placeholder="e.g. My Nice Moni Car" />
        </div>
        <div className="relative flex flex-col">
          <label>Type</label>
          <select
            name="carTypeId"
            value={formData.carTypeId}
            onChange={onSelectChange}
            className="form-select"
          >
            {carTypes?.map(carType => (
              <option key={carType.id} value={carType.id}>
                {carType.name}
              </option>
            ))}
          </select>
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
        <div className="relative flex flex-col">
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
        <div className="mt-3 flex gap-4">
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
