import { useSelector } from "react-redux";
import dataFlowers from "../../data/dataFlowers";
import Flower from "./Flower";
import { getSelectedCategory } from "../../redux/flowersSlice";

const Flowers = () => {

    const selectedCategory = useSelector (getSelectedCategory);

    return (<div>

        {dataFlowers
        .filter(flower => { 
            if (selectedCategory === 'ALL')
                return true;
            return selectedCategory === flower.category})
        .map((flower, index) => <Flower flower={flower} key={index}/>)}

    </div>)
}

export default Flowers;
