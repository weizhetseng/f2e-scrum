import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </StrictMode>
)
