import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
    }
    return (
        <div className="row my-5">
            <div className="col-5">
                <img className="img-responsive" src={item.imagen} alt={item.name} />

            </div>

            <div className="col-5">
                <h1>{item.name}</h1>
                <h3>${item.precio}</h3>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} onAdd = {onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;