import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CarIcon from '../assets/CarIcon'
import ProfileIcon from '../assets/ProfileIcon'

interface CarDetails {
  name: string
  owner: string
  type: string
  picture: string
}
function InteractiveCarImage({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false,
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }
    window.addEventListener('resize', handleResize)

    if (!isMdScreen) {
      return () => window.removeEventListener('resize', handleResize)
    }

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      plane: THREE.Mesh
    try {
      // Three.js setup
      scene = new THREE.Scene()
      // *** Updated: Adjust aspect ratio and FOV for larger image ***
      camera = new THREE.PerspectiveCamera(60, 240 / 140, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        alpha: true,
        antialias: true,
      })

      renderer.setPixelRatio(window.devicePixelRatio)

      renderer.setSize(240, 140, false) // Larger dimensions for md screens

      const aspect = 140 / 240
      const geometry = new THREE.PlaneGeometry(3, 3 * aspect) // Slightly larger plane

      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load(
        src,
        tex => {
          tex.minFilter = THREE.LinearFilter
          tex.magFilter = THREE.LinearFilter
          tex.colorSpace = THREE.SRGBColorSpace
        },
        undefined,
        () => {
          setError('Failed to load image')
        },
      )
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
      })
      plane = new THREE.Mesh(geometry, material)
      scene.add(plane)

      // Add ambient light for brightness
      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      camera.position.z = 2

      // Animation loop
      let animationFrame: number
      const animate = () => {
        if (isHovered && isMdScreen) {
          plane.rotation.y += 0.005
          plane.rotation.x += 0.0025
        } else {
          plane.rotation.y = THREE.MathUtils.lerp(plane.rotation.y, 0, 0.1)
          plane.rotation.x = THREE.MathUtils.lerp(plane.rotation.x, 0, 0.1)
        }
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

  if (error) {
    return (
      <div className="flex justify-center w-[178px] h-[104px]">
        <img
          src={src}
          alt={alt}
          className=" absolute left-[4.76px] h-[95.01px] w-[160.78px] object-contain z-10 "
        />
      </div>
    )
  }

  return (
    <div
      className="relative flex justify-center 
    
      w-[178px] h-[104px] md:w-[260px] md:h-[160px]
     
      md:cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      {isMdScreen ? (
        <canvas
          ref={canvasRef}
          className=" absolute  h-[140px] w-[240px] md:left-[10px] object-contain z-10 cursor-pointer"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className=" absolute left-[4.76px]  h-[95.01px]  w-[160.78px]  object-contain z-10 "
          style={{ zIndex: 10 }}
        />
      )}
    </div>
  )
}
function CarCard({ name, owner, type, picture }: CarDetails) {
  return (
    <>
      <div className=" m-5 w-[356px] md:w-[700px] h-[220px] top-[168px] left-[17px] rounded-lg shadow bg-[#3E7591]/70 py-[16px] px-[30px]">
        <div className="flex justify-between items-start gap-1 p-3 w-[296px] md:w-[650px] h-[188px]">
          {/* Showing the image */}

          <InteractiveCarImage src={picture} alt={name} />

          {/* Show details with icons */}
          <div className="flex flex-col w-[118px] h-[188px] gap-[32px] ">
            <div className=" flex flex-col gap-[16px] w-[118px] h-[136px]">
              <div className="flex items-center gap-2 text-[20px] tracking-normal w-[118px] h-[56px] space-y-5">
                <span className="font-serif  font-medium align-middle">{name}</span>
              </div>

              <div className="flex items-center gap-2 w-[89px] h-[24px]">
                <ProfileIcon className="h-5 w-5" />
                <span>{owner}</span>
              </div>

              <div className="flex items-center gap-2 w-[118px] h-[24px] ">
                <CarIcon className="h-6 w-6" />
                <span>{type}</span>
              </div>
            </div>
            <div className="flex justify-end mr-20 text-yellow-200 w-[88px] h-[20px] -mt-3">
              <button className="text-[14px] font-bold text-center align-middle">
                Show details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard
