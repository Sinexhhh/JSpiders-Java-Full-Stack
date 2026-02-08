import React from 'react'
import { CgSearch } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', border:'2px solid black', padding:'10px', backgroundColor:'lightgray'}}>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center'}}>    
        <img src="" alt="" />
        Logo</div>
        <div>Men</div>
        <div>Women</div>
        <div>Kids</div>
        <div>Home</div>
        <div>Beauty</div>
        <div>Genz</div>
        <div>Studio</div>
        <div style={{display:'flex', alignItems:'center', gap:'2px'}}>
            <CgSearch/>
            <input type="text" placeholder='Search for product,brands and more'/> 
        </div>
        
        </div>
        <div style={{display:'flex', gap:'30px', fontSize:'20px'}}>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <CgProfile/> 
            Profile
        </div>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <CiHeart />
        Wishlist</div>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <IoBagHandleOutline />
        Bag
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
