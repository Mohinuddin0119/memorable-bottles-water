import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({cart,handleRemoveToCart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map((bottle)=> <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={() => handleRemoveToCart(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    );
};
Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handleRemoveToCart:PropTypes.func.isRequired
}
export default Cart;