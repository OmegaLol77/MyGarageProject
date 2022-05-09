import Navbar from './Navbar';
import Home from './Home';
import SideNavbar from './SideNavbar';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import CarList from './CarList';
import CarProccess from './CarProccess';
import AddCar from './AddCar';
import Login from './Login';
import SignUp from './SignUp';
import CarUpdate from './CarUpdate';


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
              <div className="card">
                <CarProccess />
              </div>
            </Route>
            <Route path="/addcar">
              <div className="card">
                <AddCar />
              </div>
            </Route>
            <Route path="/carupdate">
              <div className="card">
                <CarUpdate />
              </div>
            </Route>
            <Route path="/Login">
              <div className="card">
                <Login />
              </div>
            </Route>
            <Route path="/SignUp">
              <div className="card">
                <SignUp />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
