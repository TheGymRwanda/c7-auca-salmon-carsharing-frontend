import { useState } from 'react'
import Calendar from './Calendar'
import TimePicker from './TimePicker'
import DateTimeHeader from './DateTimeHeader'
import TabNavigation from './TabNavigation'
import ActionButtons from './ActionButtons'
import { DateTimePickerProps } from '../type/types'

export default function DateTimePicker({ onDateTimeSelect, onCancel }: DateTimePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 5, 7)) // June 7, 2023
  const [selectedTime, setSelectedTime] = useState({ hours: 1, minutes: 7, isPM: false })
  const [activeTab, setActiveTab] = useState<'date' | 'time'>('date')

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }
  const handleTimeChange = (time: { hours: number; minutes: number; isPM: boolean }) => {
    setSelectedTime(time)
  }

  const handleAMPMToggle = (isPM: boolean) => {
    setSelectedTime(prev => ({ ...prev, isPM }))
  }

  const handleConfirm = () => {
    let hours = selectedTime.hours
    if (selectedTime.isPM && hours < 12) {
      hours += 12
    } else if (!selectedTime.isPM && hours === 12) {
      hours = 0
    }

    const finalDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hours,
      selectedTime.minutes,
    )

    onDateTimeSelect?.(finalDate)
  }

  return (
    <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
      <DateTimeHeader
        currentDate={currentDate}
        selectedTime={selectedTime}
        onAMPMToggle={handleAMPMToggle}
      />

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="mb-6 min-h-[280px]">
        {activeTab === 'date' ? (
          <Calendar
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
          />
        ) : (
          <TimePicker selectedTime={selectedTime} onTimeChange={handleTimeChange} />
        )}
      </div>

      <ActionButtons onCancel={onCancel} onConfirm={handleConfirm} />
    </div>
  )
}
