import cart from "./img/cart.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);


    return (cartTotal() > 0) ?

        <Link to={"/cart"} className="btn btn-info position-relative">
            <img src={cart} alt={"carrito"} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";

}

export default CartWidget;