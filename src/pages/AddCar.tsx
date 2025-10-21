import BackButton from '../components/BackButton'
import { ChevronDownIcon } from '../assets'
import { useCarTypes } from '../hooks'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'
import { useState } from 'react'

function AddCar() {
  const [{ data: carTypes }] = useCarTypes() // error & loading states missing
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    carTypeId: '',
    name: '',
    fuelType: '',
    horsepower: '',
    licensePlate: '',
    info: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const token = localStorage.getItem('token')
      await axios.post(
        `${apiUrl}/cars`,
        {
          ...formData,
          carTypeId: parseInt(formData.carTypeId),
          horsepower: parseInt(formData.horsepower),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )

      alert('Car added!')
      setFormData({
        carTypeId: '',
        name: '',
        fuelType: 'diesel',
        horsepower: '',
        licensePlate: '',
        info: '',
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-24 mx-5 max-w-sm items-center md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start md:gap-40">
        <BackButton />
        <h1 className="w-full text-center text-3xl font-bold tracking-widest md:text-2xl">
          New Car
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="[&_label]:ml-4 [&_label]:mb-1">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. My Nice Moni Car"
            className="form-input text-white"
          />
        </div>
        <div className="flex flex-col relative">
          <label>Type</label>
          <select
            required
            name="carTypeId"
            value={formData.carTypeId}
            onChange={handleChange}
            className="form-select"
          >
            <option>Select Car Type</option>
            {carTypes?.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
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
            <input
              required
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              placeholder="e.g. M-XY 123"
              className="form-input"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Horse Power</label>
            <input
              required
              type="text"
              name="horsepower"
              value={formData.horsepower}
              onChange={handleChange}
              placeholder="110"
              className="form-input"
            />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label>Fuel Type</label>
          <select
            required
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <div className="select-arrow">
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Additional Information</label>
          <input
            type="text"
            name="info"
            value={formData.info}
            onChange={handleChange}
            placeholder="e.g. No Smoking"
            className="form-input text-white"
          />
        </div>
        <div className="mt-16 flex gap-4">
          <button className="btn-form border-2 border-white">Cancel</button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn-form bg-white text-background"
          >
            {isSubmitting ? 'Adding...' : 'Add Car'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCar
