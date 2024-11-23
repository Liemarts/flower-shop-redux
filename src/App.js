import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Flowers from './Components/FlowersComponents/Flowers';


function App() {
  return (
    <div className="App">

      <div className='blockOne'> 

        <AllCategories />

      </div>

      <div className='blockTwo'>

        <Cart />

        <Flowers />

      </div>

    </div>
  );
}

export default App;
