import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './features/apiSlice.jsx'

// Redux rtk setup
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
