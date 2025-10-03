import NotFoundIcon from '../assets/NotFoundIcon'

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-4 font-serif font-medium  text-center">
      <div className="flex flex-col md:items-center gap-4 md:gap-6 ">
        <h1 className="  text-5xl font-black md:text-6xl ">OOOOOPS!</h1>
        <NotFoundIcon className="h-52 w-52 ml-20 md:h-64 md:w-64" />
      </div>

      <div className=" text-center text-lg md:text-xl  ">
        <p>Something went wrong.</p>
        <p>We will solve your issue soon.</p>
      </div>

      <button className="btn btn-primary mt-4 max-w-xs ">Go back</button>
    </div>
  )
}

export default ErrorPage
