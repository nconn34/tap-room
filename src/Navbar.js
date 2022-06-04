import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Mo's Tap Room</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Drink</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;