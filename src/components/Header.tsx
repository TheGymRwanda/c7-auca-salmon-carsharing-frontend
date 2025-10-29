import { HeaderProps } from '../type/types'
import BackButton from './BackButton'

const Header = ({ children }: HeaderProps) => (
  <div className="flex items-center justify-center gap-4 px-4 md:mb-6 md:mt-0">
    <BackButton />
    <h1 className="font-serif text-2xl font-bold tracking-wide text-gray-300 md:text-2xl md:tracking-widest">
      {children}
    </h1>
  </div>
)

export default Header
