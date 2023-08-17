import { App } from './app'
import './index.scss'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)