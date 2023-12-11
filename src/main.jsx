import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from './Accueil'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Accueil />,
  },
  {
    path: '/google',
    element: <a href='https://google.com'>HERE</a>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
