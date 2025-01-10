import React, { useContext } from 'react'
import './Cart.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const {cart}=useContext(StoreContext);
  
  if (cart.length >= 0) {
    return (
        <div className='cartContainer'>
       <Header/>
       <hr/>
       <div className='cartHeader'>
       <h1>Your Cart</h1>
       <p>Continue Shopping</p>
       </div>
       <div className='cartInfo'>
        <div className='cartInfoHeader'>
          <h2>Product</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
        </div>
        <hr/>
        <>
        {cart.map((ele)=>(
        
        <div className='cartInfoItem'>
          <div className='cartInfoItemProduct'>
            <img src={ele.pimg} alt='product image' style={{width:"100px"}}/>
            <p>Product Name:   {ele.pname}</p>
            <p>Product Price:  {ele.pprice}</p>
          </div>
          <div className='cartInfoItemQuantity'>
            <p>-</p>
            <p>{ele.pquantity}</p>
            <p>+</p>
          </div>
          <p className='cartInfoItemTotal'>$ {ele.pquantity * ele.pprice}</p>
        </div>
        ))}
        </>
        <hr/>
       </div>
       <div className='cartCheckout'>
       <p className='cartInfoDiscount'>5% off on all items: </p>
       <p className='cartInfoEstimate'>Estimate total: </p>
       <Link to={'/checkout'}><button>Checkout</button></Link>
       </div>
      </div>
      
      )}
    }

export default Cart
