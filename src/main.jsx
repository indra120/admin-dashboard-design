import { App } from './app'
import './index.scss'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { enableReactUse } from '@legendapp/state/config/enableReactUse'
import { enableReactComponents } from '@legendapp/state/config/enableReactComponents'

enableReactUse()
enableReactComponents()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)