import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle)
    const {name,img,price,stock} = bottle
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            <button  onClick={()=>handleAddToCart(bottle)} style={{backgroundColor:'steelblue'}}>Purchase</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}
export default Bottle;