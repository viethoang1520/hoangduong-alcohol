import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import TestPage from '@/pages/TestPage/TestPage'
const theme = 'light-theme'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductDetails from '@/pages/ProductDetails/ProductDetails'
import MainLayoutRoute from '@/routes/MainLayoutRoute/MainLayoutRoute'
import LoginLayoutRoute from './routes/LoginLayoutRoute/LoginLayoutRoute'

function App() {
  AOS.init({
    duration: 600
  })
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route element={<MainLayoutRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/test-page' element={<TestPage />}></Route>
        </Route>
        <Route element={<LoginLayoutRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
