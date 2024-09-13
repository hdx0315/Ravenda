
import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Collection from './pages/Collection'
import NewArrivals from './pages/NewArrivals'
import HotDeals from './pages/HotDeals'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Gallery from './pages/Gallery'

import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={<Collection/>}/>
          <Route path='/newArrivals' element={<NewArrivals/>}/>
          <Route path='/hotDeals' element={<HotDeals/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
