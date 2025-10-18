import { ConfirmDeleteProps } from '../type/types'
import Button from './Button'

export default function DeleteConfirmDialog({ isOpen, onConfirm, onCancel }: ConfirmDeleteProps) {
  if (!isOpen) return null

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-80 rounded-lg bg-background p-6 text-white shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Delete Car</h2>
        <p className="mb-6">Do you really want to delete this car?</p>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="outline2" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
