import React from 'react';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
    const [display, setDisplay] = useState(false);
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>{setShow(false);setDisplay(true)}}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
        <div className={`catagory ${display}`}>
            <span>image</span>
            <span>Name</span>
            <span>Color</span>
            <span>stock</span>
            <span>price</span>
        </div>
    </nav>
  )
}

export default Navbar