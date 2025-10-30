import useInteractiveImage from '../hooks/useInteractiveImage'
function InteractiveCarImage({ src, alt }: { src: string; alt: string }) {
  const { canvasRef, isMdScreen, error } = useInteractiveImage(src)
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
    <div className="relative flex justify-center md:h-[160px] md:w-[260px] md:cursor-pointer">
      {isMdScreen ? (
        <canvas
          ref={canvasRef}
          className="absolute z-10 h-[140px] w-[240px] cursor-pointer object-contain md:left-[10px]"
        />
      ) : (
        <img src={src} alt={alt} style={{ zIndex: 10 }} />
      )}
    </div>
  )
}

export default InteractiveCarImage
