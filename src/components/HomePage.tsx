function HomePage() {
  return (
    <div className=" ">
      <div className="flex flex-col justify-center md:justify-center font-serif font-bold">
        <div className="flex flex-col items-center gap-1 mb-10">
          <h1 className="text-5xl font-bold">MONI</h1>
          <h1 className="text-5xl italic">share</h1>
        </div>

        <div className="text-center  font-medium">
          <p className="text-lg">Hello Manuela!</p>
          <p className="text-lg">What are you up to today?</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:justify-center  ">
        <div className="  flex flex-col items-center gap-6 w-full max-w-xs ">
          <button className="btn btn-primary  md:mt-0 mt-20">Book Car</button>
          <p>or</p>
          <button className="btn btn-outline">See my Cars</button>
          <button className="btn btn-outline">See my Bookinngs</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
