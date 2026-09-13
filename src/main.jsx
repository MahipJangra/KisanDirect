import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
