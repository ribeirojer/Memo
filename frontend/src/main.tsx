import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Dashboard from './pages/Dashboard'
import Experimentar from './pages/Experimentar'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>        
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="experimentar" element={<Experimentar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
)
