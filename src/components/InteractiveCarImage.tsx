import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function useInteractiveImage(src: string) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 640 : false,
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => setIsMdScreen(window.innerWidth >= 640)
    window.addEventListener('resize', handleResize)
    if (!isMdScreen) return () => window.removeEventListener('resize', handleResize)

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      plane: THREE.Mesh
    try {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, 240 / 140, 0.1, 1000)
      if (!canvasRef.current) return
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(240, 140, false)
      const geometry = new THREE.PlaneGeometry(3, 3 * (140 / 240))
      const texture = new THREE.TextureLoader().load(
        src,
        tex => {
          tex.minFilter = THREE.LinearFilter
          tex.magFilter = THREE.LinearFilter
          tex.colorSpace = THREE.SRGBColorSpace
        },
        undefined,
        () => setError('Failed to load image'),
      )
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
      })
      plane = new THREE.Mesh(geometry, material)
      scene.add(plane)
      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)
      camera.position.z = 2
      let animationFrame: number
      const animate = () => {
        plane.rotation.y =
          isHovered && isMdScreen
            ? plane.rotation.y + 0.005
            : THREE.MathUtils.lerp(plane.rotation.y, 0, 0.1)
        plane.rotation.x =
          isHovered && isMdScreen
            ? plane.rotation.x + 0.0025
            : THREE.MathUtils.lerp(plane.rotation.x, 0, 0.1)
        renderer.render(scene, camera)
        animationFrame = requestAnimationFrame(animate)
      }
      animate()
      return () => {
        cancelAnimationFrame(animationFrame)
        window.removeEventListener('resize', handleResize)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        texture.dispose()
        scene.remove(ambientLight)
        ambientLight.dispose()
      }
    } catch {
      setError('Failed to initialize 3D rendering')
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [isHovered, isMdScreen, src])

  return { canvasRef, setIsHovered, isMdScreen, error }
}

function InteractiveCarImage({ src, alt }: { src: string; alt: string }) {
  const { canvasRef, setIsHovered, isMdScreen, error } = useInteractiveImage(src)

  if (error) {
    return (
      <div className="flex h-[104px] w-[178px] justify-center">
        <img
          src={src}
          alt={alt}
          className="absolute left-[4.76px] z-10 h-[95.01px] w-[160.78px] object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className="relative flex h-[104px] w-[178px] justify-center md:h-[160px] md:w-[260px] md:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMdScreen ? (
        <canvas
          ref={canvasRef}
          className="absolute z-10 h-[140px] w-[240px] cursor-pointer object-contain md:left-[10px]"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute left-[4.76px] z-10 h-[95.01px] w-[160.78px] object-contain"
          style={{ zIndex: 10 }}
        />
      )}
    </div>
  )
}

export default InteractiveCarImage
