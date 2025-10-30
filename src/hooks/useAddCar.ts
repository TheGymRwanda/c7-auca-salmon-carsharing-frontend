import { useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { apiUrl } from '../util/apiUrl'
import { CarFormData } from '../type/types'

export default function useAddCar() {
  const navigate = useNavigate()
  const initFormState: CarFormData = {
    carTypeId: '',
    name: '',
    fuelType: '',
    horsepower: '',
    licensePlate: '',
    info: '',
  }

  const [formData, setFormData] = useState<CarFormData>(initFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      } else {
        toast.error('Something went wrong')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    handleSelectChange,
    handleInputChange,
    handleSubmit,
  }
}
