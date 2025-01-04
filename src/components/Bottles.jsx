import React, { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './bottle.css'

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [cart,setCart]= useState([])


  const handleAddToCart = (bottle) =>{
    const newCart = [...cart,bottle]
    setCart(newCart)
  }

  return (
    <div>
      <h1>Memorable water bottles</h1>
      <h2>Bottles Available: {bottles.length}</h2>
      <h4>Cart:{cart.length}</h4>
      <div key={bottles.id} className="botttle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottles.id}
          handleAddToCart = {handleAddToCart}
           bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
