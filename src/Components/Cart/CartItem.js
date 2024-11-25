import { useDispatch } from "react-redux";
import dataFlowers from "../../data/dataFlowers";
import { removeItemFromCart } from "../../redux/cartSlice";
import iconDelete from './assets/icons8-delete-2.png';



const CartItem = ({cartItem}) => {

    const flowers = dataFlowers.find (item => item.id === cartItem.flowerId);

    const dispatch = useDispatch();


    return (<div className="cartItems">

        <p>{flowers.name}</p>

        <p>{cartItem.quantity} item(s)</p>

        <p>Price: ${flowers.price*cartItem.quantity}</p>

        <span onClick={()=> dispatch (removeItemFromCart ({cartItemId: cartItem.id}))}>
            <img className="iconTwo" src={iconDelete} alt="Delete" />
        </span>


    </div>)
}

export default CartItem;