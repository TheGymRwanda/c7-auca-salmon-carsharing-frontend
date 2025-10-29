import { useState } from 'react'
import { TimePickerProps } from '../type/types'

export default function TimePicker({ selectedTime, onTimeChange }: TimePickerProps) {
  const [isMinutesOpen, setIsMinutesOpen] = useState(false)

  const handleTimeChange = (type: 'hours' | 'minutes', value: number) => {
    onTimeChange({ ...selectedTime, [type]: value })
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        {/* Hours Section */}
        <div className="flex-1">
          <div className="mb-3 text-sm font-medium text-gray-700">Hours</div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(hour => (
              <button
                key={hour}
                onClick={() => handleTimeChange('hours', hour)}
                className={`flex size-12 items-center justify-center rounded-xl text-base font-medium transition-all ${
                  selectedTime.hours === hour
                    ? 'scale-105 bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:scale-105 hover:bg-gray-200'
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        {/* Minutes Section */}
        <div className="flex-1 text-black">
          <div className="mb-3 text-sm font-medium text-black">Minutes</div>
          <div className="relative inline-block">
            <button
              onClick={() => setIsMinutesOpen(!isMinutesOpen)}
              className="w-10 rounded border px-2 py-1 text-sm"
            >
              {selectedTime.minutes.toString().padStart(2, '0')}
            </button>

            {isMinutesOpen && (
              <div className="absolute left-0 top-full z-10 mt-1 max-h-36 w-12 overflow-y-auto rounded border bg-white shadow-lg">
                {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                  <button
                    key={minute}
                    onClick={() => {
                      handleTimeChange('minutes', minute)
                      setIsMinutesOpen(false)
                    }}
                    className="block w-full border-b px-2 py-1 text-center text-xs last:border-b-0 hover:bg-gray-100"
                  >
                    {minute.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>{' '}
    </div>
  )
}
