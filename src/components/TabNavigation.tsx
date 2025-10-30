interface TabNavigationProps {
  activeTab: 'date' | 'time'
  onTabChange: (tab: 'date' | 'time') => void
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="rounded-lgp-1 mb-6 flex justify-between space-x-1">
      <button
        onClick={() => onTabChange('date')}
        className={`flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          activeTab === 'date'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>
      <button
        onClick={() => onTabChange('time')}
        className={`flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
          activeTab === 'time'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  )
}
