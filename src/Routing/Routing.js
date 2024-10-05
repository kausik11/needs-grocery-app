import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from '../Pages/Home/Home.js';
import PNF from '../components/PNF/PNF.js';
import AllProducts from '../Pages/allproducts/AllProducts.js';
import ContactInfo from '../Pages/contactinfo/ContactInfo.js';
import Cart from '../Pages/Cart/Cart.js';
import AdminHome from '../Admin/Home/AdminHome.js';
import SingleProduct from '../Pages/singleproduct/SingleProduct.js';
import Checkout from '../Pages/checkout/Checkout.js';
import MyOrders from '../Pages/myorders/MyOrders.js';
import BillPage from '../Pages/billpage/BillPage.js';
import Login from '../Pages/Login/Login.js';
import Register from '../Pages/Register/Register.js';
import ProtectedRoutes from '../components/auth/Auth.js';
import AdminLogin from '../Admin/AdminLogin/AdminLogin.js';
import AddProduct from '../Admin/AddProduct/AddProduct.js';
import ViewItem from '../Admin/viewitems/ViewItems.js';
import ViewOrders from '../Admin/vieworders/ViewOrders.js';

const Routing = () => {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<PNF/>}></Route>
        <Route path='/allProducts' element={<AllProducts/>}></Route>
        <Route path='/productdetails/:id' element={<SingleProduct/>}></Route>
        <Route path='/contact' element={<ContactInfo/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/myorders' element={<MyOrders/>}></Route>
        <Route path='/mybill' element={<BillPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>


        {/* Admin Part */}
        <Route element={<ProtectedRoutes/>}>
        <Route path='/admin' element={<AdminHome/>}></Route>
        <Route path='/admin/addproduct' element={<AddProduct/>}></Route>
        <Route path='/admin/viewallitem' element={<ViewItem/>}></Route>
        <Route path='/admin/viewallorders' element={<ViewOrders/>}></Route>
        </Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
     </Routes>
    </Router>
  )
}

export default Routing
