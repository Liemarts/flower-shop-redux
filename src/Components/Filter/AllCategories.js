import Filter from "./Filter";

const AllCategories = () => {
    return (<div>

        <h1>Delight yourself and your loved ones, choose what you like.</h1>
        <h1> We deliver only joy!</h1>

        <div className="filterCategory">
            {['FLOWERS', 'BOUQUET', 'COMPOSITION', 'ALL'].map((category, index) => <Filter key={index} category={category} />)}
        </div>

    </div>)
}

export default AllCategories;
