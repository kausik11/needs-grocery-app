import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header';
import { StoreContext } from '../../context/StoreContext';
const SingleProduct = () => {
    const {AllItems} = useContext(StoreContext); 
    const{id} = useParams();

    let currItem = AllItems.find((ele)=>ele.id == id) 

    //you may also like
    // const YouMayLike = 
  return (
    <div className='singleItemContainer'>
      <Header/>
      <div className='singleItemdetails'>
      <img src={currItem.image} alt='product'></img>
      <div className='singlrItemDesc'>
        <h4>{currItem.name}</h4>
        <p>${currItem.price}</p>
        <div>
            <h4>quantity</h4>
            <p>+</p>
            <p>1</p>
            <p>-</p>
        </div>
        <button>Add to cart</button>
        <div>
            <h4>description</h4>
            <p>{currItem.description}</p>
        </div>
      </div>
      </div>
      <div className='YouMayLIke'>
        <h2>You May also Like</h2>
       {
        AllItems.map(
            (ele)=>{
            if(ele.category === currItem.category && ele.id !== currItem.id){
            return(<div key={ele.id}>
            <img src={ele.image} alt='product'></img>
            <h4>{ele.name}</h4>
            <p>${ele.price}</p>
            </div>)
        }
       })
       }
      </div>
    </div>
  )
}

export default SingleProduct
