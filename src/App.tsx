import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { configure } from 'axios-hooks'
import ProtectedRoute from './components/ProtectedRoute'
import { routesConfig } from './routes/AppRoutes'

configure({ defaultOptions: { autoCancel: false } })

export default function App(): ReactElement {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {routesConfig
          .filter(r => r.protected)
          .map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
      </Route>
      {routesConfig
        .filter(r => !r.protected)
        .map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
    </Routes>
  )
}
