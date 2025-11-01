import { ReactNode } from 'react'
import BackButton from './BackButton'

export default function PageWrapper({
  pageName,
  children,
}: {
  pageName: string
  children: ReactNode
}) {
  return (
    <div className="mx-5 mt-24 items-center md:flex md:max-w-none md:flex-col">
      <div
        className={`relative mb-4 h-9 w-full min-w-56 text-center ${pageName.length < 9 ? '' : 'flex items-center'}`}
      >
        <div className={`absolute`}>
          <BackButton />
        </div>
        <h1
          className={`${pageName.length < 9 ? 'pl-6' : 'w-full self-center pl-10 text-xl'} font-serif text-3xl font-bold tracking-widest md:text-2xl`}
        >
          {pageName.toUpperCase()}
        </h1>
      </div>
      {children}
    </div>
  )
}
