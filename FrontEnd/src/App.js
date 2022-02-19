import Navbar from './Navbar';
import Home from './Home';
import SideNavbar from './SideNavbar';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import CarList from './CarList';
import CarProccess from './CarProccess';
import AddCar from './AddCar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <div className="side-navbar">
            <SideNavbar />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="card">
                <Home />
              </div>
            </Route>
            <Route path="/carlist">
              <div className='card'>
                <CarList />
              </div>
            </Route>
            <Route path="/carproccess">
              <CarProccess />
            </Route>
            <Route path="/addcar">
              <div className="card">
                <AddCar />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
