
import { Link } from "react-router-dom"

export default function WorkerSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                <Link to="/">Home</Link>

                <Link to="/carproccessupdate">Car Proccess Update</Link>
                <Link to="/carlist">Car List</Link>
                <Link to="/Login">Login</Link>

                <Link to="/WriteCarReport">Write Report</Link>
              
            </div>
        </div>
    )
}
