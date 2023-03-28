import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getDocs, collection, getFirestore, where, query} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState([true]);
    const { id } = useParams();


    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id )) : itemsCollection;

        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element =>({id:element.id, ...element.data()}))
                                .sort(({ index: previousID }, { index: currentID }) => previousID - currentID));
        setLoading(false);
        });

    }, [id]);


    return (
        <div className="container">
            <div className="row">
                {loading? <Loading/> :<ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;

//local 
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(items => items.categoria === id) : arrayProductos);
    //         }, 1000)
    //     });

    //     promesa.then((respuesta) => {
    //         setItems(respuesta);
    //     });
    // }, [id]);

    // PARA SUBIR PRODUCTOS LOCALES DE JSON
    // useEffect(() => { 
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     arrayProductos.forEach(item =>{
    //         addDoc(itemsCollection, item);
    //     });

    //     console.log("add");
    // }, []);
