import { motion } from 'framer-motion'
import { LoadingSpinnerProps } from '../type/types'

export default function LoadingSpinner({
  message = 'Loading data...',
  fullscreen = true,
}: LoadingSpinnerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullscreen ? 'h-screen' : 'h-full py-10'
      } -mt-32 text-center`}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="size-14 animate-spin rounded-full border-4 border-blue-500 border-y-transparent" />
        <motion.span
          className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.p
        className="mt-6 text-sm font-medium text-gray-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        {message}
      </motion.p>
    </div>
  )
}
