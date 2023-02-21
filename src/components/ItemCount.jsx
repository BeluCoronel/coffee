import { useState, useEffect } from "react";

const ItemCount = ({ stock }) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log(items + " agregados al carrito");
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
                    <div className="btn-group">
                        <button className="btn btn-info" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemCount;