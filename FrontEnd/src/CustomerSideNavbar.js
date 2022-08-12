import { Link } from "react-router-dom"

export default function CustomerSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
                {/* <Link to="/carproccessupdate">Car Proccess Update</Link> */}
                <Link to="/mycustomercarlist">My Personal Car List</Link>
                <Link to="/carproccess">Car Proccess</Link>
            </div>
        </div>
    )
}
