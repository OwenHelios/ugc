import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Home from 'pages/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" />
        <Route path="/fire" />
        <Route path="/water" />
      </Routes>
    </BrowserRouter>
  )
}
