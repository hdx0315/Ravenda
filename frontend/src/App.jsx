

//  App.jsx
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

import Admin from './pages/Admin/Admin'
import AdminNewProduct from './pages/Admin/AdminNewProduct'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminEdit from './pages/Admin/AdminEdit'
import AdminEditItem from './pages/Admin/AdminEditItem'

import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={<Collection/>}/>
          <Route path='/newArrivals' element={<NewArrivals/>}/>
          <Route path='/hotDeals' element={<HotDeals/>}/>

          <Route path='/product/:id' element={<Product />} />

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<SignUp/>}/>

          <Route path='/admin' element={<Admin/>}/>
          

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected Admin Routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/newProduct" 
          element={
            <ProtectedRoute>
              <AdminNewProduct />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/editItem" 
          element={
            <ProtectedRoute>
              <AdminEdit />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/admin/editItem/:id" 
          element={
            <ProtectedRoute>
              <AdminEditItem />
            </ProtectedRoute>
          } 
        />


        </Routes>
      </Router>
    </>
  )
}

export default App
 
 
 
 
 
 
 
 
 
 
 
 