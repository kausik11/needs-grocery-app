import React, { useEffect, useState } from 'react'
import './Home.css'
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import Header from '../../components/Header/Header'
import { assets, items } from '../../assets/assets';
import HomeItem from '../../components/HomeItem/HomeItem';
import Item from '../../components/Item/Item';
import { Link } from 'react-router-dom';

const Home = () => {
  const text=["Welcome to our store","Order now and get 5% of for all items","Free Delivery over 2999/-"]
  const[index,setIndex] = useState(0);
  

  const nextMsg = ()=>{
    setIndex((prevIndex)=>(prevIndex+1)%text.length);

  }
   const findBestSeller = ()=>{
    const bestSeller = items.filter(item=>item.bestSeller);
    return bestSeller;
   };
  
   useEffect(()=>{findBestSeller()},[]);
  return (
    <div className='home_container'>
      <div className='home_discount_bar'>
      <PiLessThanBold onClick={()=>nextMsg()}/>
        <p>{text[index]}</p>
        <PiGreaterThanBold onClick={()=>nextMsg()}/>
      </div>
      <Header/>
      <div className='home_relax'>
        <img src={assets.relax_home} alt='heroimage'></img>
        <div className='home_relax_info'>
        <h1>Browse our latest products</h1>
        <p>Needs online grocery store. Currently available in selected cities only, we will be expanding to as many Indian cities as possible very soon.</p>
        <Link to={'/allProducts'}><button>Shop all</button></Link>
        </div>
      </div>
      <HomeItem/>
      <>
        <h2>Our Best seller</h2>
         <Item bestitem={findBestSeller}/>
      </>
    </div>
  )
}

export default Home
