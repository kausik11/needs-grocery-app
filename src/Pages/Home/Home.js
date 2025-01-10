import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import Header from '../../components/Header/Header'
import { assets, items } from '../../assets/assets';
import HomeItem from '../../components/HomeItem/HomeItem';
import Item from '../../components/Item/Item';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Home = () => {
  const text=["Welcome to our store","Order now and get 5% of for all items","Free Delivery over 2999/-"]
  const[index,setIndex] = useState(0);
  const[pdata,setpdata]=useState([]);
  const {product} = useContext(StoreContext);
  
  useEffect(()=>{
    if (product){
      setpdata(product);
    }
  },[product])




  const nextMsg = ()=>{
    setIndex((prevIndex)=>(prevIndex+1)%text.length);

  }
   const findBestSeller =()=>{
    if (pdata && Array.isArray(pdata)) {
      return pdata.filter(item => item.bestselling); // Assuming `bestSeller` is a boolean property
    }
      // const bestSeller = pdata.filter(item=>item.bestSeller);
    // const bestSeller = items.filter(item=>item.bestSeller);
    return [];
   };
  
  const bestSellerItem = findBestSeller();

  // useEffect(()=>{
  //    if (bestSellerItem!=[] && pdata!=[]) {
  //     console.log("Best Seller Items: ", bestSellerItem);
  // console.log("Product Data from Context: ", pdata);
  //    }
  // },[bestSellerItem,pdata])
  

 
 
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
     {bestSellerItem.length > 0 ? <HomeItem bestitems={bestSellerItem}/>: <h1>No item available</h1>}
      <>
        <h2>Our Best seller</h2>
        {bestSellerItem.length > 0 ?  <Item bestitem={bestSellerItem}/> : <p>No best seller available</p>}
        
      </>
    </div>
  )
}

export default Home
