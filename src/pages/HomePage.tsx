function HomePage() {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center  mt-[90px]  font-serif font-bold md:justify-center">
        <div className="mb-10 flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold">MONI</h1>
          <h1 className="text-5xl italic">share</h1>
        </div>

        <div className="text-center  font-medium">
          <p className="text-lg">Hello Manuela!</p>
          <p className="text-lg">What are you up to today?</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:justify-center  ">
        <div className="  flex w-full max-w-xs flex-col items-center gap-6 ">
          <button className="btn btn-primary  mt-20 md:mt-0">Book Car</button>
          <p>or</p>
          <button className="btn btn-outline">See my Cars</button>
          <button className="btn btn-outline">See my Bookinngs</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
