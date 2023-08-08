import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {UserContextProvider} from './context/UserContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
)

