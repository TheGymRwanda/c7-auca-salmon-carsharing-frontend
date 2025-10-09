import { useEffect, useRef, useState } from 'react'
import { initThreeCar } from '../util/threeCarRenderer'

function useInteractiveImage(src: string) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 640 : false,
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    const handleResize = () => setIsMdScreen(window.innerWidth >= 640)
    window.addEventListener('resize', handleResize)

    if (!isMdScreen) return () => window.removeEventListener('resize', handleResize)

    let cleanup: () => void

    try {
      cleanup = initThreeCar({ canvas: canvasRef.current, src, isHovered, isMdScreen })
    } catch {
      setError('Failed to initialize 3D rendering')
      return () => window.removeEventListener('resize', handleResize)
    }

    return () => {
      cleanup && cleanup()
      window.removeEventListener('resize', handleResize)
    }
  }, [src, isHovered, isMdScreen])

  return { canvasRef, setIsHovered, isMdScreen, error }
}
export default useInteractiveImage
