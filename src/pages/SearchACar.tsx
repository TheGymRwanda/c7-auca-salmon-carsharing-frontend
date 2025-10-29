import { useState } from 'react'
import DateTimePicker from '../components/DateTimePicker'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { SearchACarProps } from '../type/types'

export default function SearchACar({ onSearch }: SearchACarProps) {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState<Date>(new Date(2023, 5, 7, 13, 7))
  const [endDate, setEndDate] = useState<Date>(new Date(2023, 5, 7, 14, 7))
  const [showStartPicker, setShowStartPicker] = useState(false)
  const [showEndPicker, setShowEndPicker] = useState(false)

  const formatDateTime = (date: Date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const year = date.getFullYear()
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM'

    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`
  }

  const handleStartDateSelect = (date: Date) => {
    setStartDate(date)
    setShowStartPicker(false)

    if (endDate < date) {
      const newEndDate = new Date(date)
      newEndDate.setHours(date.getHours() + 1)
      setEndDate(newEndDate)
    }
  }

  const handleEndDateSelect = (date: Date) => {
    if (date > startDate) {
      setEndDate(date)
    } else {
      const newEndDate = new Date(startDate)
      newEndDate.setHours(startDate.getHours() + 1)
      setEndDate(newEndDate)
    }
    setShowEndPicker(false)
  }

  const handleSearch = () => {
    onSearch?.(startDate, endDate)
    navigate('/variablecar')
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg p-6  md:-mt-20  md:flex  md:w-1/3 md:flex-col  md:justify-center ">
        <h1 className="  mb-10 flex  justify-center font-serif text-2xl font-bold tracking-wide text-gray-300  md:tracking-widest">
          BOOK CAR
        </h1>

        <div className="mb-6">
          <label className="mb-2 block text-sm ">Start date</label>
          <button
            onClick={() => setShowStartPicker(true)}
            className="w-full rounded-full  bg-[#64A1C0] p-3 text-left hover:border-blue-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="">{formatDateTime(startDate)}</div>
          </button>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm">End date</label>
          <button
            onClick={() => setShowEndPicker(true)}
            className="w-full rounded-full  bg-[#64A1C0] p-3 text-left hover:border-blue-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="">{formatDateTime(endDate)}</div>
          </button>
        </div>

        <Button onClick={handleSearch} variant="primary" className="mt-16">
          Search Available Cars
        </Button>

        {showStartPicker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <DateTimePicker
              onDateTimeSelect={handleStartDateSelect}
              onCancel={() => setShowStartPicker(false)}
            />
          </div>
        )}
        {showEndPicker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <DateTimePicker
              onDateTimeSelect={handleEndDateSelect}
              onCancel={() => setShowEndPicker(false)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
