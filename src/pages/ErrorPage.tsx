import NotFoundIcon from '../assets/NotFoundIcon'
import Button from '../components/Button'

export default function ErrorPage() {
  return (
    <div className="mt-48 flex flex-col items-center justify-center gap-5 text-center font-serif font-medium">
      <div className="flex flex-col gap-4 md:items-center md:gap-6 ">
        <h1 className="  text-5xl font-black md:text-6xl ">OOOOOPS!</h1>
        <NotFoundIcon className="ml-20 size-52 md:size-64" />
      </div>

      <div className=" text-center text-xl text-gray-200 md:text-xl  ">
        <p>Something went wrong.</p>
        <p>We will solve your issue soon.</p>
      </div>

      <Button variant="primary" onClick={() => window.history.back()} className="mt-4 max-w-xs">
        Go back
      </Button>
    </div>
  )
}
