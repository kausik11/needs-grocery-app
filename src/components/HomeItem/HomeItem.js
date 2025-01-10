import React, { useContext } from 'react'
import './HomeItem.css'
import { assets } from '../../assets/assets'
import { GoShare } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { StoreContext } from '../../context/StoreContext';

const HomeItem = ({bestitems}) => {
    
    const filterItems = bestitems.filter((ele)=>ele.pname === "chicken");
    // console.log(filterItems)
  return (
    <>
        <div className='homeItemImage'>
          <img src={filterItems[0].img3} alt='coconutoil'></img>
        </div>
        <div className='homeItemDesc'>
        <h1>Good Quality Chicken</h1>
        <div className='homeItemPrice'>
            <p className='cross'>$ {filterItems[0].pprice+300}</p>
            <p>$ {filterItems[0].pprice}</p>
            <p>Sale</p>
        </div>
        <ul>
            <li>Pay in 4 available payment method</li>
            <li>Free Delivery order over 2999</li>
            <li></li>
        </ul>
        <div className='homeItemQuantity'>
            <p>Quantity</p>
            <div className='homeItemIncDec'>
                <p>+</p>
                <p>1</p>
                <p>-</p>
            </div>
        </div>
        <button>Add to Cart</button>
        <button>Order Now</button>
        </div>
        <div className='homeItemShare'>
            <p>
                <GoShare/>
                <h4>Share</h4>
               
            </p>

            <p>
                <h4>View full Details</h4>
                <FiArrowRight/>
            </p>
        </div>
    </>
  )
}
export default HomeItem
