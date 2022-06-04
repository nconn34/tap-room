import DrinkList from './DrinkList';
import useFetch from './useFetch';

const Home = () => {
const {data: drink, isPending, error } = useFetch('http://localhost:8001/menu');

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
         {drink && <DrinkList drink={drink} title="All Of Our Beers, Ciders, and Kombucha on tap!" />}
        </div>
    );
}
 
export default Home;