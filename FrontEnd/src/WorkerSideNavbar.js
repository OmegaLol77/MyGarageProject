
import { Link } from "react-router-dom"

export default function WorkerSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                <Link to="/wcarlist">Car List</Link>
                <Link to="/WriteCarReport">Write Report</Link>
                <Link to="/wapprovedcars">Approved Cars List</Link>
            </div>
        </div>
    )
}
