import React from 'react'
import './Cart.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
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
      <div className='cartInfoItem'>
        <div className='cartInfoItemProduct'>
          <img src='#' alt='product image'/>
          <p>Product Name:</p>
          <p>Product Price:</p>
        </div>
        <div className='cartInfoItemQuantity'>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <p className='cartInfoItemTotal'>$ 49.00</p>
      </div>
      <hr/>
     </div>
     <div className='cartCheckout'>
     <p className='cartInfoDiscount'>5% off on all items: {'-$12.00'}</p>
     <p className='cartInfoEstimate'>Estimate total: {'$47.00'}</p>
     <Link to={'/checkout'}><button>Checkout</button></Link>
     </div>
    </div>
  )
}

export default Cart
