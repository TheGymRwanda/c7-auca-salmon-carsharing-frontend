import * as THREE from 'three'
import { ThreeCarProps } from '../type/types'

export function initThreeCar({ canvas, src, isHovered, isMdScreen }: ThreeCarProps) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 240 / 140, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(240, 140, false)

  const geometry = new THREE.PlaneGeometry(3, 3 * (140 / 240))
  const texture = new THREE.TextureLoader().load(src, tex => {
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.colorSpace = THREE.SRGBColorSpace
  })

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
  })

  const plane = new THREE.Mesh(geometry, material)
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
    renderer.dispose()
    geometry.dispose()
    material.dispose()
    texture.dispose()
    scene.remove(ambientLight)
    ambientLight.dispose()
  }
}
