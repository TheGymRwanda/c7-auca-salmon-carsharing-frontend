import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import ErrorPage from './components/ErrorPage'
// import HomePage from './components/HomePage'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  return (
    <main className="mx-auto flex min-h-screen w-3/4 flex-col gap-8 py-20 ">
      {/* <HomePage /> */}
      <ErrorPage />
    </main>
  )
}

export default App
