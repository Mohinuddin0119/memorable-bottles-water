import React, { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './bottle.css'
import { addToLS, getStoredCart } from "../utilities/localStorage";
import Cart from "./Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [cart,setCart]= useState([])
  // load to data 
  useEffect(() => {
    console.log(bottles.length)
    if(bottles.length> 0){
      const cartStore = getStoredCart()
      // console.log(cartStore,bottles)
      let savedCart = []
      for(const id of cartStore){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id)
        if(bottle){
          savedCart.push(bottle)
        }
      }
      console.log(savedCart)
      setCart(savedCart)
    }
  }, [bottles])

  const handleAddToCart = (bottle) =>{
    const newCart = [...cart,bottle]
    setCart(newCart)
    addToLS(bottle.id)
  }

  return (
    <div>
      <h1>Memorable water bottles</h1>
      <h2>Bottles Available: {bottles.length}</h2>
      <h4>Cart:{cart.length}</h4>
      <Cart cart={cart}> </Cart>
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
