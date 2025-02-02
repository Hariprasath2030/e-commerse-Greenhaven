// import { Container } from '@chakra-ui/react'
// import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLogin } from '../logincontext';
import { FaCartShopping } from "react-icons/fa6";


function Navbar() {
  const [toggle,settoogle]=useState(0);
  // const [searchElement,setSearchElement]=useState("");
  // useEffect(()=>{
  //   localStorage.setItem("searchElement",searchElement);
  // })
  const handleSearch=()=>{

  }
  function toggletheme()
  {
    if (toggle==0){
      settoogle(1);
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
  
    }
    else{
      settoogle(0);
      document.body.style.backgroundColor="rgb(6, 32, 56)";
      document.body.style.color="white";
    }
    
  }
  function toogledrawer()
  {
    
  }

  function closeUserDetails()
  { 
    const d=document.getElementsByClassName("side_bar_user");
    for (let element of d) {
      // element.style.display = "none";
      element.style.opacity= "0";
      element.style.transform=" translateX(100%)";
      // element.style.right="0px";
      // element.style.top="0px";
    }
    
  }
  const [toggleBar, setToggleBar] = useState(false); // Use a boolean

  function toggleSearchBar() {
    const searchBar = document.getElementById("search_bar_id");

    if (toggleBar) {
      searchBar.classList.remove("active"); // Hide
    } else {
      searchBar.classList.add("active"); // Show 
    }
    setToggleBar(!toggleBar); 
  }
   const {login}=useLogin();

   const navigate = useNavigate();

   function userAuth() {
    if (login==true) {
      const d = document.getElementsByClassName("side_bar_user");
      for (let element of d) {
        element.style.display = "flex";
        element.style.opacity = "1";
        element.style.transform = "translateX(0)";
        element.style.pointerEvents = "auto";
      }
    } else {
      // If not logged in, navigate to login page
      navigate("/login");
    }
  }
   
  return (
    <>
    <div className='side_bar_user'>
      <div className="close">
        <RxCross2 onClick={closeUserDetails}/>
      </div>
      <div className='user_details'>       
          <CiUser /> 
          <p onClick={closeUserDetails}> My Profile</p>
      </div >
      <div className='user_details'>
        <TiShoppingCart />
        <p onClick={closeUserDetails}>My Orders</p>
      </div>
      <div className='user_details'>
          <IoMdAdd /> 
      <Link to={"/create"}>
          <p onClick={closeUserDetails}> Add My Products </p></Link>
      </div>
      <div className='user_details'>
          <IoLogOutOutline /> 
            <p onClick={closeUserDetails}>Logout </p>
      </div>
     
    </div>
    <div className='header'>

    <div className="navbar">
      <div className="name">
        <button onClick={toogledrawer}><FaBars className='drawer'/></button>
        <Link to={"/"}>GreenHaven 🛒</Link> 
      </div>

      
      <div className="icons">
       {/* <button className='plus'><CiSquarePlus /></button>  */}
       {/* <button  onClick={ toggletheme} className='theme'><IoIosColorPalette /></button> */}
      
       <button className='user' onClick={userAuth}><FaUserCircle />
       </button>
       <FaCartShopping />
      </div>
    </div>

      {/* <div className='search_bar' id="search_bar_id">
          <div className="input_text">
            <input type="text" placeholder='search Plants' value={searchElement} onChange={(e)=> setSearchElement(e.target.value)} />
          </div>
        <div className='search_button'>
            <button ><FaSearch />
            </button>
        </div>

      </div> */}
    </div>
    </>
  )
}

export default Navbar