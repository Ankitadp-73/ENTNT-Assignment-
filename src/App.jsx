import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {HashRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import Dashboard from './Dashboard'
import OrderDetails  from './OrderDetails'

import AddProduct from './AddProduct'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([...items])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/ordersManagement" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/productManagement" element={<Product/>} />
      <Route path="/orderDetails" element={<OrderDetails/>} />
      <Route path="/addProduct" element={<AddProduct/>} />
    </Routes>
  
    </Router>
    </>
  )
}

export default App;