import React from 'react'
import './Item.css'

const Item = ({bestitem}) => {
    let allbestitem = bestitem();
  return (
    <div className='ItemContainer'>
      {allbestitem.map((currele)=>{
        return(
            <div key={currele.id} className='Item'>
            <img src={currele.image}></img>
             <p>{currele.name}</p>
             <p>${currele.price}</p>
             <p>{currele.description}</p>
             <button>Add to Cart</button>
              </div>)
      })}
    </div>
  )
}

export default Item
