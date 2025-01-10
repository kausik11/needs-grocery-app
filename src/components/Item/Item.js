import React from 'react'
import './Item.css'

const Item = ({bestitem}) => {
  
    // let allbestitem = bestitem();
    // console.log("best item",bestitem)
  return (
    <div className='ItemContainer'>
      {bestitem.map((currele)=>{
        return(
            <div key={currele.id} className='Item'>
            <img src={currele.img1}></img>
             <p>{currele.pname}</p>
             <p>${currele.pprice}</p>
             <p>{currele.pdesc}</p>
             <button>Add to Cart</button>
              </div>)
      })}
    </div>
  )
}

export default Item
