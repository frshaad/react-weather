import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { store } from './app/store'
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
