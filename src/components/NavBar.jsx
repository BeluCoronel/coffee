import CartWidget from "./CartWidget";
import isotipo from "./img/isotipo.png";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "#D9B9A7" }}>
                <div className="col-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to={"/"}><img src={isotipo} alt={"isotipo"} width={50}></img></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav" >
                                <ul className="navbar-nav" >
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/cafe"}>Café</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/chocolate"}>Chocolate</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/cafetera"}>Cafetera</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;