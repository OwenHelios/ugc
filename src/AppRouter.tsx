import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Home from 'pages/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" />
        <Route path="/fire" />
        <Route path="/water" />
      </Routes>
    </BrowserRouter>
  )
}
