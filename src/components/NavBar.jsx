import CartWidget from "./CartWidget";
import isotipo from "./img/isotipo.svg";
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor: "#592C28" }}>
                <div className="col-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to={"/"}><img src={isotipo} alt={"isotipo"} width={120}></img></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav" >
                                <ul className="navbar-nav ms-5">
                                    <li className="nav-item fs-4">
                                        <NavLink className="nav-link text-light" activeClassName={"active"} to={"/"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item fs-4">
                                        <NavLink className="nav-link text-light" activeClassName={"active"} to={"/category/cafe"}>Café</NavLink>
                                    </li>
                                    <li className="nav-item fs-4">
                                        <NavLink className="nav-link text-light" activeClassName={"active"} to={"/category/chocolate"}>Chocolate</NavLink>
                                    </li>
                                    <li className="nav-item fs-4">
                                        <NavLink className="nav-link text-light" activeClassName={"active"} to={"/category/cafetera"}>Cafetera</NavLink>
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