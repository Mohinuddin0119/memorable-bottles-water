import React from 'react';
import './bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle)
    const {name,img,price} = bottle
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button  onClick={()=>handleAddToCart(bottle)} style={{backgroundColor:'steelblue'}}>Purchase</button>
        </div>
    );
};

export default Bottle;