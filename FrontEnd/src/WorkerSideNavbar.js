
import { Link } from "react-router-dom"

export default function WorkerSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                {/* <Link to="/WCarUpdate">Car Update</Link> */}
                <Link to="/WriteCarReport">Write Report</Link>
                <Link to="/carproccessupdatew">Car Proccess Update</Link>
                <Link to="/wcarlist">Car List</Link>
            </div>
        </div>
    )
}
