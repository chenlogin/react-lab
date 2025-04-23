import { StrictMode } from 'react'
// React 与 Web 浏览器对话的库（React DOM）
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.tsx'
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </StrictMode>,
)
