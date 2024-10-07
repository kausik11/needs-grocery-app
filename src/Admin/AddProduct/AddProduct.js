import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
  const api = 'http://localhost:1000/product';
  const [formdata,setFormData] = useState({productName:"",productPrice:"",productCategory:"",productDescription:"",productQuantity:"", 
    errors:{
      productName:"",
      productPrice:"",
      productCategory:"",
      productDescription:"",
      productQuantity:""
    }
  });

  const [image,setImage] = useState("");


  const changeHandler = (event)=>{
     const{name,value} = event.target;

     let err = {...formdata.errors}

     switch(name){
      case "productName": err.productName = value.length < 1 ? "Required Field" : ""
      break;
      case "productPrice": err.productPrice = value.length < 1 ? "Required field": ""
      break;
     }
    setFormData({...formdata,[name]:value,errors:err})
  }



  const handleImage = (filesObj)=>{
    // console.log(filesObj);
     const fileReader = new FileReader();
     fileReader.readAsDataURL(filesObj);
     fileReader.addEventListener("load",()=>{
      setImage(fileReader.result);
     })
  }

  const submitHandler = (event)=>{
      event.preventDefault();
      const DataTosend = {
        Name:formdata.productName,
        Price:formdata.productPrice,
        Category:formdata.productCategory,
        Description:formdata.productDescription,
        Quantity:formdata.productQuantity,
        image: image
      }
      axios.post(api,DataTosend).then(res=>{
        if (res.status === 200 || res.status === 201){
          alert("data add succesfully");
      }
      }).catch(err=>{console.log(err)})
  }

  // console.log(formdata);

  return (
    <div className='adminAddProd'>
     <h1>Add A Product</h1>
     <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="name of the product" name='productName' onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Price of the product" name='productPrice' onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className='mb-3' controlId=''>
      <Form.Label>Category</Form.Label>
      <Form.Select aria-label="Default select example" name='productCategory' onChange={changeHandler}>
      {/* <option>Open this select menu</option> */}
      <option value="Beverages">Beverages</option>
      <option value="Fruits">Fruits</option>
      <option value="Meat">Meat</option>
      <option value="Dairy">Dairy</option>
      <option value="Oil">Oil</option>
      <option value="Bakery">Bakery</option>
    </Form.Select>
    </Form.Group>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" name='productImage' onChange={(event)=>{handleImage(event.target.files[0])}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows={2} name='productDescription'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Available Quantity" name='productQuantity'/>
      </Form.Group>
      <button>Submit</button>
    </Form>
    
    </div>
  )
}

export default AddProduct
