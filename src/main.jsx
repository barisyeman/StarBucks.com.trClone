import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routers'
import "./assets/styles.css"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
