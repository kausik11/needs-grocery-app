import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div>
      <h1>This is admin home page</h1>
      <Link to={'/admin/addproduct'}><button>Add Product</button></Link>
      <Link to={'/admin/viewallitem'}><button>View All Items</button></Link>
      <Link to={'/admin/viewallorders'}><button>View All Orders</button></Link>
    </div>
  )
}

export default AdminHome
