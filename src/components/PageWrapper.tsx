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
      <div className="relative mb-6 h-9 text-center w-full min-w-56">
        <div className="absolute">
          <BackButton />
        </div>
        <h1
          className={`${pageName.length < 9 ? 'pl-6' : 'pl-12 text-xl'} font-serif text-3xl font-bold tracking-widest md:text-2xl`}
        >
          {pageName.toUpperCase()}
        </h1>
      </div>
      {children}
    </div>
  )
}
