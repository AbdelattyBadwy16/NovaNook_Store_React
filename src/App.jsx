
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Items from './pages/Items'
import PageNotFound from './components/PageNotFound'
import Cart from "./features/cart/Cart"
import Item from './pages/item'
import GetOrder from './pages/GetOrder'
import Login from './pages/Login'
import DashBord from './pages/DashBord'
import OrderDone from './components/OrderDone'
import Orders from './pages/Orders'
import CreateItem from './components/CreateItem'
import ConfirmEmail from './pages/ConfirmEmail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route element={<AppLayout></AppLayout>}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/items/:id' element={<Items></Items>}></Route>
          <Route path='/item/:id' element={<Item />}></Route>
          <Route path='/getorder' element={<GetOrder />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/orderdone' element={<OrderDone />}></Route>
          <Route path='/dashbord' element={<DashBord />}></Route>
          <Route path='/createitem' element={<CreateItem />}></Route>
          <Route path='/email' element={<ConfirmEmail />}></Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
