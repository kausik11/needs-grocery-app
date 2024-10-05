import React from 'react'
import { Link } from 'react-router-dom'

const MyOrders = () => {
  return (
    <div>
      MyOrders page
      <Link to={'/mybill'}><button>Bill</button></Link>
    </div>
  )
}

export default MyOrders
