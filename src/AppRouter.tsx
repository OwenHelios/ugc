import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Home from 'pages/Home'
import Register from 'pages/Register'
import Dashboard from 'pages/Dashboard'
import Login from 'pages/Login'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
