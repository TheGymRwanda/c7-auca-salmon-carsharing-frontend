export interface CarDetailsType {
  id?: number
  name: string
  owner: string
  type: string
  picture: string
}

export interface ThreeSetupProps {
  canvas: HTMLCanvasElement
  src: string
  isHovered: boolean
  isMdScreen: boolean
}

export interface ThreeCarProps {
  canvas: HTMLCanvasElement
  src: string
  isHovered: boolean
  isMdScreen: boolean
}
