import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './gallery.css'
import './highlights.css'
import App from './App.jsx'
import Reviews from './Reviews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Reviews />
  </StrictMode>,
)
