import { CalendarProps } from '../type/types'
import { months } from '../util/Months'

export default function Calendar({
  currentDate,
  onDateChange,
  onPreviousMonth,
  onNextMonth,
}: CalendarProps) {
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()

  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="size-8"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === currentDate.getDate()
      days.push(
        <button
          key={day}
          onClick={() => onDateChange(new Date(year, month, day))}
          className={`flex size-8 items-center justify-center rounded-full text-sm font-medium
            ${isSelected ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
        >
          {day}
        </button>,
      )
    }
    return days
  }

  return (
    <div className="space-y-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={onPreviousMonth}
          className="flex size-8 items-center justify-center rounded-full text-lg font-medium text-gray-600 hover:bg-gray-100"
        >
          ‹
        </button>
        <div className="font-semibold text-gray-800">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button
          onClick={onNextMonth}
          className="flex size-8 items-center justify-center rounded-full text-lg font-medium text-gray-600 hover:bg-gray-100"
        >
          ›
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  )
}
