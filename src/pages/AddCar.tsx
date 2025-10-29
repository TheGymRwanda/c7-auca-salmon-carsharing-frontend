import { useNavigate } from 'react-router-dom'
import CarForm from '../components/CarForm'
import PageWrapper from '../components/PageWrapper'
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
  const navigate = useNavigate()
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
      navigate('/own-car')
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
    <PageWrapper pageName="new car">
      <CarForm
        formData={formData}
        isSubmitting={isSubmitting}
        onSelectChange={handleSelectChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </PageWrapper>
  )
}
