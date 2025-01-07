const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}
const saveToLS =(cart) =>{
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfied)
}
const addToLS =(id) =>{
    const cart = getStoredCart();
    cart.push(id)
    // save to local storage
    saveToLS(cart)
}

const removeCart = (id) =>{
    const cart = getStoredCart()
    // removing every id
    const remaing = cart.filter(idx => idx !== id)
    saveToLS(remaing)
}


export {addToLS, getStoredCart, removeCart}