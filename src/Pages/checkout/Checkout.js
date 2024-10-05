import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className='checkoutContainer'>
    <h1>Checkout Your Orders</h1>
    <div className='checkoutHeader'>
    <p>Go to home Page</p>
    <CiShoppingCart style={{fontSize:"25px"}}/>
    </div>
    <div className='checkoutInfo'>
        <div className='checkoutInfoOrderSummary'>
        <p>Show Order Summary</p>
        <FaAngleDoubleDown />
        </div>
        <div className='checkoutInfoPrice'>
            <p style={{textDecoration: "line-through"}}>{'$ 49.00'}</p>
            <p>{'$ 30.00'}</p>
        </div>
    </div>
   <div className='checkoutForm'>
    <form>
        <label htmlFor='emial'>Contact</label>
        <input type='email' id='email' name='email' placeholder='Enter your email'/>
    </form>
    <form>
        <label htmlFor='country'>Delivery</label>
        <select id='country'>
         <option value={'India'}>India</option>
         <option value={'Uk'}>UK</option>
         <option value={'Bangladesh'}>Bangladesh</option>
       </select>
       <input type='text' placeholder='First Name' name='fname'></input>
       <input type='text' placeholder='Last Name' name='lname'></input>
       <input type='text' placeholder='Address' name='address'></input>
       <input type='text' placeholder='Apartment' name='apartment'></input>
       <input type='text' placeholder='City' name='city'></input>
       <select>
        <option value={'wb'}>West Bengal</option>
        <option value={'pb'}>Purba Bardhaman</option>
       </select>
       <input type='text' placeholder='ZipCode' name='zip'></input>
           </form>
           <form>
            <label htmlFor='payment'>Payment</label>
            <select id='payment'>
                <option value={'cash'}>Cash on Delivery</option>
                <option value={'card'}>Card</option>
            </select>
           </form>
   </div>
   <div className='checkoutOrderSummary'>
   <div className='first'>
    <img src='#' alt='itemImage'></img>
    <p>Item Name:</p>
    <p>Price:</p>
    </div>
    <div className='second'>
    
    </div>
   </div>
   <Link to={'/myorders'}><button>Order Now</button></Link>
    </div>
  )
}

export default Checkout
