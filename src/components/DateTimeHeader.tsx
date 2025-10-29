import { DateTimeHeaderProps } from '../type/types'
import { months } from '../util/Months'

export default function DateTimeHeader({
  currentDate,
  selectedTime,
  onAMPMToggle,
}: DateTimeHeaderProps) {
  return (
    <>
      <h2 className="font-normal text-gray-500">SELECT DATE & TIME</h2>

      <div className="flex-between flex gap-10">
        <div>
          <div className="mb-1 text-sm text-gray-600">{currentDate.getFullYear()}</div>
          <div className="mb-6 text-3xl font-semibold text-gray-800">
            {months[currentDate.getMonth()].slice(0, 3)} {currentDate.getDate()}
          </div>
        </div>

        <div className="mt-10 flex">
          <div className="mb-2 text-5xl font-normal text-gray-600">
            {selectedTime.hours.toString().padStart(2, '0')}:
            {selectedTime.minutes.toString().padStart(2, '0')}
          </div>
          <div>
            <div className="flex flex-col gap-2 p-1">
              <button
                onClick={() => onAMPMToggle(false)}
                className={`rounded-md text-sm font-medium transition-colors ${
                  !selectedTime.isPM
                    ? 'font-medium text-gray-800 shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                AM
              </button>
              <button
                onClick={() => onAMPMToggle(true)}
                className={`rounded-md text-sm font-medium transition-colors ${
                  selectedTime.isPM
                    ? 'font-medium text-gray-800 shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                PM
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
