import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Flower = ({flower}) => {

    const [quantity, setQuantity] = useState (1);
    const dispatch = useDispatch();

    return (<div className="items">

        <img src={`${flower.img}.jpg`} alt="items" />
        <h3 className="flowerItem">{flower.name}</h3>
        <p className="priceItem">$ {flower.price}</p>

        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

        <button onClick={()=> {dispatch (addItemToCart ({flower, quantity}))}}>Add to cart</button>


    </div>)
}

export default Flower;
