import BackButton from '../components/BackButton'
import CarForm from '../components/CarForm'
import { apiUrl } from '../util/apiUrl'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function AddCar() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const initFormState = {
    carTypeId: '',
    name: '',
    fuelType: '',
    horsepower: '',
    licensePlate: '',
    info: '',
  }
  const [formData, setFormData] = useState(initFormState)
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
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

      toast.success('Car added!')
      setFormData(initFormState)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error('Failed to add car')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-5 mt-24 max-w-sm items-center md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start md:gap-40">
        <BackButton />
        <h1 className="w-full text-center text-3xl font-bold tracking-widest md:text-2xl">
          New Car
        </h1>
      </div>
      <CarForm
        formData={formData}
        isSubmitting={isSubmitting}
        onSelectChange={handleSelectChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
