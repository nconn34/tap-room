import { Link } from "react-router-dom";

const  DrinkList = ({menu, name, type}) => {
    

    return ( 
        <div className="menu-list">
            <h2>{name}</h2>
            {menu.map((drink) => (
            <div className="drink-preview" key={drink.id}>
                <Link to={`/menu/${drink.id}`}>
                <h2>{drink.type}</h2>
                </Link>
            </div>
           ))}
        </div>
     );
}
 
export default DrinkList;