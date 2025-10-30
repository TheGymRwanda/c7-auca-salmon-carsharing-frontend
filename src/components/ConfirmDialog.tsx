import { ConfirmDeleteProps } from '../type/types'
import Button from './Button'

export default function ConfirmDialog({
  isOpen,
  onConfirm,
  onCancel,
  type = 'delete',
  title,
  message,
}: ConfirmDeleteProps) {
  if (!isOpen) return null

  const defaultContent = {
    delete: {
      title: 'Delete Car',
      message: 'Do you really want to delete this car?',
      confirmText: 'Delete',
    },
    book: {
      title: 'Confirm Booking',
      message: 'Do you want to confirm booking this car?',
      confirmText: 'Confirm',
    },
  }

  const content = defaultContent[type]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-50">
      <div className="w-80 rounded-lg bg-background p-6 text-white shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">{title || content.title}</h2>
        <p className="mb-6">{message || content.message}</p>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="outline2" onClick={onConfirm}>
            {content.confirmText}
          </Button>
        </div>
      </div>
    </div>
  )
}
