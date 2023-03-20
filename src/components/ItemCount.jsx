import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdedd] = useState(false);

    useEffect(() => {
        if (stock > 0) setItemStock(stock);
    }, [stock]);

    const aumentarStock = () => {

        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const disminuirStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log(items + " agregados al carrito");
            setItemAdedd (true);
            onAdd(items);
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-info" onClick={disminuirStock}>-</button>
                        <button className="btn btn-info">{items}</button>
                        <button className="btn btn-info" onClick={aumentarStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-info"> Finalizar compra </Link> :
                    <button className="btn btn-info" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>
        </div>

    )
}

export default ItemCount;