import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import cartIconTwo from './icons8-cart-two.png';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';


const Cart = () => {

    const cartItems = useSelector (getCartItems);
    const totalPrice = useSelector (getTotalPrice);

    return (<div className='cartTotal'>

        <img className='cartIcon' src={cartIconTwo} alt="cartIcon"/>

        <h3 className='total'>TOTAL: ${totalPrice}</h3>

        {cartItems.map((cartItem, index) => 
            <CartItem cartItem={cartItem} key={index} />
        )}

    </div>)
}

export default Cart;