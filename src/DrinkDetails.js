import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
import React from "react";
const DrinkDetails = () => {
    const {id} = useParams()
    const {data: drink, error, isPending} = useFetch('http://localhost:3000/drinks/' + id);
    const history = useHistory();
    const [count, setCount] = useState(1984);
   
    const handleClick= () =>{
        fetch('http://localhost:3000/drinks/' + drink.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }
    const decrementPint = () => {
        setCount(count - 16);
    }
    const decrementGrowler = () => {
        setCount(count - 64);
    }
   
    return ( 
        <div className="location-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {drink && (
                <article>
                    <h2>{drink.name}</h2>
                    <h2>Type: {drink.type}</h2>
                    <h2>Brewery: {drink.brewer}</h2>
                    <h2>ABV (%) : {drink.abv}</h2>
                    <h2>Price per pint: {drink.pint}</h2>
                    <h2>Price per growler: {drink.growler}</h2>
                    <button onClick={handleClick}>Delete Drink</button>
                    {'\n'}<button onClick={decrementPint}>Sold a pint</button>
                    {'\n'}<button onClick={decrementGrowler}>Sold a Growler</button>
                    {count}
                </article>
            )}
        </div>
     );
}

 
export default DrinkDetails;
