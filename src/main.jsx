import { StrictMode } from 'react'
// React 与 Web 浏览器对话的库（React DOM）
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Router, Route, Link } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
