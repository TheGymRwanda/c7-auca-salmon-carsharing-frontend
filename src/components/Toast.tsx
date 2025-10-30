import { motion, AnimatePresence } from 'framer-motion'

interface Toast {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

export default function ToastContainer({ toasts }: { toasts: Toast[] }) {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }

  return (
    <div className="fixed right-4 top-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`flex items-center gap-2 rounded-lg px-4 py-3 text-white shadow-lg ${colors[toast.type]}`}
          >
            {toast.type === 'success' && '✅'}
            {toast.type === 'error' && '❌'}
            {toast.type === 'info' && 'ℹ️'}
            <span className="font-medium">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
