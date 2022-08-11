import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import CarList from './CarList';
import CarProccess from './CarProccess';
import AddCar from './AddCar';
import Login from './Login';
import SignUp from './SignUp';
import CarProccessUpdate from './CarProccessUpdate';
import CarProccessUpdateW from './CarProccessUpdateW';
import DeleteUser from './DeleteUser';
import AdminLogin from './AdminLogin';
import WorkerCarReport from './WorkerCarReport';
import CarUpdate from './CarUpdate';
import WorkerCarList from './WorkerCarList';
import AdminCarList from './AdminCarList';
import CustomerCarList from './CustomerCarList';
import AdminSideNavbar from './AdminSideNavbar';
import WorkerSideNavbar from './WorkerSideNavbar';
import CustomerSideNavbar from './CustomerSideNavbar';
import MyCustomerCarList from './MyCustomerCarList'
import WCarUpdate from './WCarUpdate';
import WCarList from './WCarList';
import AddUser from './AddUser';

export default function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
          <Route exact path="/">
              <div className="card">
                <Login/>
              </div>
            </Route>
            <Route path="/SignUp">
              <div className="card">
                <SignUp />
              </div>
            </Route>

            {/* Admin Pages */}
            <Route path="/AdminCarList">
            <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className="card">
                <AdminCarList />
              </div>
            </Route>
            <Route path="/carlist">
            <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className='card'>
                <CarList />
              </div>
            </Route>
            <Route path="/DeleteUser">
            <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className="card">
                <DeleteUser />
              </div>
            </Route>
            <Route path="/addcar">
            <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className="card">
                <AddCar />
              </div>
            </Route>
            <Route path="/carproccessupdate">
              <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className="card">
                <CarProccessUpdate />
              </div>
            </Route>
            <Route path="/carupdate">
              <div className="card">
                <CarUpdate />
              </div>
            </Route>
            <Route path="/adduser">
              <div className='side-navbar'>
                <AdminSideNavbar/>
              </div>
              <div className="card">
                <AddUser />
              </div>
            </Route>
            

            {/* Worker Pages */}
            <Route path="/WorkerCarList">
            <div className='side-navbar'>
                <WorkerSideNavbar/>
              </div>
              <div className="card">
                <WorkerCarList />
              </div>
            </Route>
            <Route path="/carproccessupdatew">
              <div className='side-navbar'>
                <WorkerSideNavbar/>
              </div>
              <div className="card">
                <CarProccessUpdateW />
              </div>
            </Route>
            <Route path="/WriteCarReport">
              <div className='side-navbar'>
                <WorkerSideNavbar/>
              </div>
              <div className="card">
                <WorkerCarReport />
              </div>
            </Route>
            <Route path="/wcarlist">
              <div className='side-navbar'>
                <WorkerSideNavbar/>
              </div>
              <div className="card">
                <WCarList/>
              </div>
            </Route>
            <Route path="/carupdatew">
              <div className='side-navbar'>
                <WorkerSideNavbar/>
              </div>
              <div className="card">
                <WCarUpdate />
              </div>
            </Route>



            {/* Customer Pages */}
            <Route path="/CustomerCarList">
            <div className='side-navbar'>
                <CustomerSideNavbar/>
              </div>
              <div className="card">
                <CustomerCarList />
              </div>
            </Route>
            <Route path="/mycustomercarlist">
            <div className='side-navbar'>
                <CustomerSideNavbar/>
              </div>
              <div className="card">
                <MyCustomerCarList />
              </div>
            </Route>
            <Route path="/carproccess">
              <div className="card">
                <CarProccess />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


