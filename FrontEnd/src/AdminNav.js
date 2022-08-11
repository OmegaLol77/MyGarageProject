import { Link } from "react-router-dom"
export default function AdminNav() {
  return (
    <nav className="navbar">
        <h1>MyGarage</h1>
        <div className="links">
                <Link to="/addcar">Add Car</Link>
                <Link to="/carproccessupdate">Car Proccess Update</Link>
                <Link to="/carlist">Car List</Link>
                <Link to="/carproccess">Car Proccess</Link>
                {/* <Link to="/Login">Login</Link> */}
                {/* <Link to="/AdminLogin">Admin Login</Link> */}
                {/* <Link to="/WriteCarReport">Write Report</Link> */}
                <Link to="/DeleteUser">Delete User</Link>
        </div>
        <div className="space"></div>
    </nav>
  )
}
 