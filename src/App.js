import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import DrinkDetails from './DrinkDetails';
import SalesControl from './SalesControl';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/drinks/:id">
            <DrinkDetails />
            <SalesControl />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;