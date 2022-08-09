import { Link } from "react-router-dom"

export default function CustomrtSideNavbar() {
    return (
        <div >
            <h2 className="menu">Menu</h2>
            <div className="sidebar">
           
                <Link to="/carproccessupdate">Car Proccess Update</Link>
                <Link to="/carlist">Car List</Link>
                {/* <Link to="/carupdate">Car Update</Link> */}
                <Link to="/carproccess">Car Proccess</Link>
            </div>
        </div>
    )
}
