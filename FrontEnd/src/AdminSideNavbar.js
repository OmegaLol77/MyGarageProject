import { Link } from "react-router-dom"

export default function AdminSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                <Link to="/addcar">Add Car</Link>
                <Link to="/adduser">Add User</Link>
                <Link to="/carlist">Car List</Link>
                <Link to="/DeleteUser">Delete User</Link>
                {/* <Link to="/carproccessupdate">Car Proccess Update</Link> */}
                <Link to="/notapproved">Not Approved Reports</Link>
                <Link to="/CheckedList">Cars In Need Of Offer List</Link>
                {/* <Link to="/AdminLogin">Admin Login</Link> */}
                {/* <Link to="/WriteCarReport">Write Report</Link> */}
            </div>
        </div>
    )
}
