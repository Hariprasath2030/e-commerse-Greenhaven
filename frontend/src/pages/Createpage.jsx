import React, { useState } from 'react'
import "./styles/cstyle.css"
import {Button} from "../components/ui/button.jsx"
import { useProductStore } from '../store/product.js';
import axios from "axios"
import { toast } from 'react-toastify';

function Createpage() {
  const [newproduct,setnewproduct]=useState({
    name:"",
    price:"",
    image:"",
    brand:"",
    category:"",
    discription:"",
    selling:""
  });
  function namehandler(e)
  {    
    setnewproduct({
      ...newproduct,name:e.target.value
    })
  }

  function pricehandler(e)
  {
    setnewproduct({
      ...newproduct,price:e.target.value
    });
  }
  function imagehandler(e)
  {
    setnewproduct({
      ...newproduct,image:e.target.value
    });
  }
  
  function sellpricehandler(e)
  {
    setnewproduct({
      ...newproduct,selling:e.target.value
    });
  }

  function dishandler(e)
  {
    setnewproduct({
      ...newproduct,discription:e.target.value
    });
  }


  function categoryhandler(e)
  {
    setnewproduct({
      ...newproduct,category:e.target.value
    });
  }
  function brandhandler(e)
  {
    setnewproduct({
      ...newproduct,brand:e.target.value
    });
  }
const {createProduct}=useProductStore();

const handleAddProduct= async()=>{

    try{

    const res = await axios.post("http://localhost:5000/api/v1/add", newproduct)
    if (res.data.success)
      toast.success("Added  product!")
     }
    catch{
      toast.error("Please Provide all fields")
    }
    setnewproduct({name:"",price:"",image:"",brand:"",category:"",discription:"",selling:""})
}

    
  return (
    <div className="container">
  <div className="additem">
    <div className="heading">Create New Product</div>
    <form className="form" action="">
      <input 
      type="text" 
      placeholder="Product Name" 
      value={newproduct.name}
      onChange={(e)=> namehandler(e)}/>

        <input 
      type="text" 
      placeholder="Brand Name" 
      value={newproduct.brand}
      onChange={(e)=> brandhandler(e)}/>

      <input 
      type="text" 
      placeholder="Category" 
      value={newproduct.category}
      onChange={(e)=> categoryhandler(e)}/>



       <input 
      type="text" 
      placeholder="Discription" 
      value={newproduct.discription}
      onChange={(e)=> dishandler(e)}/>

      <input type="number"
      placeholder="Price" 
      value={newproduct.price}
      onChange={(e)=> pricehandler(e)}/>

       <input type="number"
      placeholder="Selling Price" 
      value={newproduct.selling}
      onChange={(e)=> sellpricehandler(e)}/>

      <input type="text" 
      placeholder="Image URL" 
      value={newproduct.image}
      onChange={(e=> imagehandler(e))}/>
      <Button className="button1"colorscheme='blue' onClick={handleAddProduct} w='full'>
        Add Product
      </Button>
     
    </form>
  </div>
</div>

  );
}

export default Createpage 
