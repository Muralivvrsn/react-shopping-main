import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, color, stock, price, image} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={image} alt="pic" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{color}</p>
            <p>{stock}</p>
            <p>{price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards