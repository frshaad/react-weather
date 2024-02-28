import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { Location, Locations, NotFound, Settings } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/locations',
    element: <Locations />,
    children: [
      {
        path: '/locations/:locationId',
        element: <Location />,
      },
    ],
  },
])

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
