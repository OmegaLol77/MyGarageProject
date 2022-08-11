import { Link } from "react-router-dom"

export default function AdminSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                <Link to="/addcar">Add Car</Link>
                <Link to="/carproccessupdate">Car Proccess Update</Link>
                <Link to="/carlist">Car List</Link>
                <Link to="/carproccess">Car Proccess</Link>
                <Link to="/adduser">Add User</Link>
                {/* <Link to="/AdminLogin">Admin Login</Link> */}
                {/* <Link to="/WriteCarReport">Write Report</Link> */}
                <Link to="/DeleteUser">Delete User</Link>
            </div>
        </div>
    )
}
