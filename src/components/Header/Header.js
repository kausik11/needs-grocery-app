import React, { useState } from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
  const[searchActive,setSearchactive] = useState(0)
  return (
    <div className='header_container'>
    <div className='logo'>
      <img src={assets.logo} alt='logo'></img>
      <p>Needs Grocer</p>
      </div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/allProducts'}>Product</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <div className='header_container_right'>
      <IoSearchOutline style={{fontSize:"25px"}}  onClick={()=>{!searchActive? setSearchactive(1) : setSearchactive(0)}}/>
      <CiShoppingCart style={{fontSize:"25px"}}></CiShoppingCart>
      <div className='dot'>1</div>
      </div>
      <div className='headersearchbar'>
      {searchActive ? <SearchBar status={setSearchactive}/> : ""}
      </div>
    </div>
  )
}

export default Header
