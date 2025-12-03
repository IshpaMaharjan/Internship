import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ConnectionProvider } from './context/ConnectionContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ConnectionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectionProvider>
    </AuthProvider>
  </React.StrictMode>,
)