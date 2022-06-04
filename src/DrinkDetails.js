import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";
const DrinkDetails = () => {
    const {id} = useParams()
    const {data: drink, error, isPending} = useFetch('http://localhost:3000/drinks/' + id);
    const history = useHistory();
    const handleClick= () =>{
        fetch('http://localhost:3000/drinks/' + drink.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
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
                    <h2>Price per six-pack: {drink.six}</h2>
                    <button onClick={handleClick}>Delete Drink</button>
                </article>
            )}
        </div>
     );
}

 
export default DrinkDetails;
