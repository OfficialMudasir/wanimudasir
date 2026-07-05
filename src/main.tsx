import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from './components/analytics/Analytics'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Analytics />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
