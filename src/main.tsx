import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './css/index.css'
import { AuthContextProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
