import React, { useContext, useState } from 'react'
import './AllProduct.css'
import { StoreContext } from '../../context/StoreContext'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
// import { items } from '../../assets/assets';
const AllProducts = () => {

  const {AllItems} = useContext(StoreContext);
  console.log(AllItems);

  const navigate = useNavigate();

  const handleRedirect = (id)=>{
     navigate(`/productdetails/${id}`)
  }

  const [currentPage,setCurrentPage] = useState(1);//track current page
  const itemsPerPage = 6;

  const TotalPage = Math.ceil(AllItems.length/itemsPerPage);

  const startIndex = (currentPage-1) * itemsPerPage;

  const currentItems = AllItems.slice(startIndex,startIndex+itemsPerPage);


  const handleNext = ()=>{
    if (currentPage< TotalPage) {
      setCurrentPage((prevpage)=>prevpage+1)
    }
  }

  const handlePrev = ()=>{
    if (currentPage> 1) {
      setCurrentPage((prevpage)=>prevpage-1)
    }
  }
  return (
    <div className='allprodContainer'>
      <Header/>
      <h1>Products</h1>
      <div className='allprodfilterandsort'>
      <div className='allprodfilter'>
        <p>Filter</p>
        <select>
          <option value="all">All</option>
          <option value="beverages">beverages</option>
        </select>
      </div>
      <div className='allprodsort'>
        <p>Sort</p>
        <select>
        <option value="">Alphabetically, A-Z</option>
        <option value="">Price Low to High</option>
        <option value="">Price High to Low</option>
        <option value="">Best selling</option>
        </select>
        <p>Total : {AllItems.length} Items</p>
      </div>
      </div>

      <div className='allprodshow'>
        {currentItems.map((ele,index)=>{
          return(
            <div key={index} onClick={()=>{handleRedirect(ele.id)}}>
              <img src={ele.image}></img>
              <p>{ele.name}</p>
              <p>${ele.price}</p>
            </div>
          )
        })}
      </div>
      <button onClick={()=>{handlePrev()}} disabled={currentPage===1}>Previous</button>
      <button onClick={()=>{handleNext()}} disabled={currentPage===TotalPage}>Next</button>
    </div>
  )
}

export default AllProducts
