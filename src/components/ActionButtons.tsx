import { ActionButtonsProps } from '../type/types'

export default function ActionButtons({
  onCancel,
  onConfirm,
  confirmLabel = 'OK',
  cancelLabel = 'CANCEL',
}: ActionButtonsProps) {
  return (
    <div className="flex justify-between gap-3 border-t border-gray-200 pt-4">
      <button
        onClick={onCancel}
        className="flex-1 rounded-lg px-4 py-3 font-medium text-blue-600 hover:bg-gray-50"
      >
        {cancelLabel}
      </button>
      <button
        onClick={onConfirm}
        className="flex-over:bg-blue-7001 rounded-l px-4 py-3 font-medium text-blue-600"
      >
        {confirmLabel}
      </button>
    </div>
  )
}
