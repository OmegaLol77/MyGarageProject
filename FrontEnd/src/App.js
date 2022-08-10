import Navbar from './Navbar';
import Home from './Home';
import SideNavbar from './SideNavbar';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import CarList from './CarList';
import CarProccess from './CarProccess';
import AddCar from './AddCar';
import Login from './Login';
import SignUp from './SignUp';
import CarProccessUpdate from './CarProccessUpdate';
import DeleteUser from './DeleteUser';
import AdminLogin from './AdminLogin';
import WorkerCarReport from './WorkerCarReport';
import CarUpdate from './CarUpdate';

import WorkerCarList from './WorkerCarList';
import AdminCarList from './AdminCarList';
import CustomerCarList from './CustomerCarList';


export default function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
          <Route exact path="/">
              <div className="card">
                <Home />
              </div>
            </Route>
          <Route path="/Login">
              <div className="card">
                <Login />
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
            <Route path="/DeleteUser">
              <div className="card">
                <DeleteUser />
              </div>
            </Route>
            <Route path="/addcar">
              <div className="card">
                <AddCar />
              </div>
            </Route>
            <Route path="/carproccessupdate">
              <div className="card">
                <CarProccessUpdate />
              </div>
            </Route>
           
            <Route path="/AdminLogin">
              <div className="card">
                <AdminLogin />
              </div>
            </Route>
            <Route path="/SignUp">
              <div className="card">
                <SignUp />
              </div>
            </Route>
            <Route path="/carupdate">
              <div className="card">
                <CarUpdate />
              </div>
            </Route>
            <Route path="/WriteCarReport">
              <div className="card">
                <WorkerCarReport />
              </div>
            </Route>
            <Route path="/WorkerCarList">
              <div className="card">
                <WorkerCarList />
              </div>
            </Route>

            <Route path="/AdminCarList">
              <div className="card">
                <AdminCarList />
              </div>
            </Route>
            <Route path="/CustomerCarList">
              <div className="card">
                <CustomerCarList />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

