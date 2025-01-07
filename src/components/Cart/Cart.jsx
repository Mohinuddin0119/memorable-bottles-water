import './cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map((bottle)=> <img src={bottle.img}></img>)
            }
        </div>
    );
};

export default Cart;