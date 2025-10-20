import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './pages/NavBar'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar profile />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
