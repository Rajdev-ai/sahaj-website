import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './gallery.css'
import './highlights.css'
import './social-links.css'
import App from './App.jsx'
import Reviews from './Reviews.jsx'
import SocialLinks from './SocialLinks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SocialLinks />
    <Reviews />
  </StrictMode>,
)
