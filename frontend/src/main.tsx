import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import DashBoard from './pages/DashBoard'
import Exercices from './pages/Exercices'
import Experimentar from './pages/Experimentar'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import SendCard from './pages/SendCard'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>        
          <Route path="/" element={<Home />} />
          <Route path="experimentar" element={<Experimentar />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="exercises/:subject" element={<Exercices />} />
          <Route path="cards" element={<SendCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  //</React.StrictMode>
)
