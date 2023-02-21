import cart from "./img/cart.svg"

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-info position-relative">
                <img src={cart} alt={"carrito"} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
            </button>
        </div>
    )
}

export default CartWidget;