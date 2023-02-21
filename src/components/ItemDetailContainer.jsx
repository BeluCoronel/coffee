import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./productos.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(prod => prod.id === parseInt(id)));
            }, 1000);
        });

        promesa.then((respuesta) => {
            setItem(respuesta);
        })
    }, [id]);

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;