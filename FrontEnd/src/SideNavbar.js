
import { Link } from "react-router-dom"

export default function SideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                <Link to="/">Home</Link>
                <Link to="/addcar">Add Car</Link>
                <Link to="/carupdate">Car Update</Link>
                <Link to="/carlist">Car List</Link>
                <Link to="/carproccess">Car Proccess</Link>
                <Link to="/Login">Login</Link>
                <Link to="/AdminLogin">Admin Login</Link>
                <Link to="/WriteCarReport">Write Report</Link>
                <Link to="/DeleteUser">Delete User</Link>
            </div>
        </div>
    )
}
