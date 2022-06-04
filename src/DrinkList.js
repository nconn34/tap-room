import { Link } from "react-router-dom";

const  DrinkList = ({drink, name, type}) => {
    

    return ( 
        <div className="drink-list">
            <h2>{name}</h2>
            {drink.map((drink) => (
            <div className="drink-preview" key={drink.id}>
                <Link to={`/drinks/${drink.id}`}>
                <h2>{drink.name}</h2>
                </Link>
            </div>
           ))}
        </div>
     );
}
 
export default DrinkList;