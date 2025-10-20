import BackButton from '../components/BackButton'
import { ChevronDownIcon } from '../assets'

function AddCar() {
  return (
    <div className="mt-24 mx-5 max-w-sm items-center md:flex md:max-w-none md:flex-col">
      <div className="left-4 top-24 m-6 flex h-9 w-80 items-center justify-start md:gap-40">
        <BackButton />
        <h1 className="w-full text-center text-3xl font-bold tracking-widest md:text-2xl">
          DETAILS
        </h1>
      </div>
      <form className="[&_label]:ml-4 [&_label]:mb-1">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. My Nice Moni Car"
            className="form-input text-white"
          />
        </div>
        <div className="flex flex-col relative">
          <label>Type</label>
          <select name="" id="" className="form-select">
            <option value="">Moni Cooper</option>
            <option value="">Countryman</option>
            <option value="">Moni Country</option>
          </select>
          <div className="select-arrow">
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label>License Plate</label>
            <input type="text" placeholder="e.g. M-XY 123" className="form-input" />
          </div>
          <div className="flex flex-col">
            <label className="">Horse Power</label>
            <input type="text" placeholder="110" className="form-input" />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label>Fuel Type</label>
          <select name="" id="" className="form-select">
            <option value="">Diesel</option>
            <option value="">Petrol</option>
          </select>
          <div className="select-arrow">
            <ChevronDownIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Additional Information</label>
          <input type="text" placeholder="e.g. No Smoking" className="form-input text-white" />
        </div>
        <div className="mt-16 flex gap-4">
          <button className="btn-form border-2 border-white">Cancel</button>
          <button type="submit" className="btn-form bg-white text-background">
            Add Car
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCar
