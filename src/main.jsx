import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './compomemts/index.module.css'
import app from './compomemts/App.module.css'
import header from './compomemts/Header.module.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
