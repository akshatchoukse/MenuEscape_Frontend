import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import OrderDetail from './pages/OrderDetail'
import Category from './pages/Category'
import AbtSoftware from './componets/AbtSoftware'
import AbtHotel from './componets/AbtHotel'
import RestaurantRating from './componets/RestaurantRating'
import LoginForm from './pages/LoginForm'
import CheckOutCart from './pages/CheckOutCart'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ratings' element={<RestaurantRating/>}></Route>
        <Route path='/about_restaurant' element={<AbtHotel/>}></Route>
        <Route path='/about_software' element={<AbtSoftware/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/order-detail' element={<OrderDetail/>}></Route>
        <Route path='/check-out-cart' element={<CheckOutCart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App