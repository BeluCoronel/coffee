import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import eliminar from "./img/eliminar.svg";
import Swal from 'sweetalert2';



const Cart = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const { cart, cartSuma, clear, removeItem, cartTotal } = useContext(CartContext);

    const generarOrden = () => {
        const comprador = { name: nombre, email: email, phone: telefono };
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const orden = { comprador: comprador, item: cart.map(({ id, name, cantidad, precio, totalParcial }) => ({ id, name, cantidad, precio, totalParcial: cantidad * precio })), date: date, total: cartSuma() };

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, orden).then(data => {

            clear();

            Swal.fire({
                title: 'Orden generada exitosamente',
                html: `Su orden de compra es <b>${data.id}</b>`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
    }



    if (cartTotal() === 0) {
        return (
            <div className="alert alert-info text-center"> No se encontraron productos en el carrito.</div>
        )
    }


    return (

        <div className="container m-0">
            <div className="row">
                <h1 className="text-center">Productos seleccionados</h1>
                <div className="col-md-4">

                </div>
                <div className="col-md-8">
                    <table className="table mt-5">
                        <tr>
                            <td>&nbsp;</td>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <td>&nbsp;</td>
                        </tr>

                        {
                            cart.map(item =>
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.name} width={100} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.cantidad} x ${item.precio}</td>
                                    <td>${item.cantidad * item.precio}</td>
                                    <td> <button className="btn btn-info" onClick={() => { removeItem(item.id) }} title={"Eliminar producto"}> <img src={eliminar} alt={"Eliminar producto"} width={15} /></button></td>
                                </tr>
                            )}
                        <tr>
                            <th className="text-end" colSpan={3}>Total</th>
                            <td>${cartSuma()}</td>
                            <td>&nbsp;</td>
                        </tr>
                        <button className="btn btn-info" onClick={() => { clear() }}>Vaciar carrito</button>
                    </table>

                    <form className="mt-5">
                        <div class="mb-3">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="texto" class="form-control" id="nombre" onInput={(e) => { setNombre(e.target.value) }} required />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="texto" class="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} required />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="texto" class="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} required />
                        </div>

                        <button type="button" class="btn btn-info" onClick={generarOrden}>Generar compra</button>

                    </form>
                </div>
            </div>
        </div>


    )
}

export default Cart;