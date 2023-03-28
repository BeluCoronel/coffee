import { createContext, useState } from "react";

export const CartContext = createContext();


    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (inCart(item.id)) {
            let pos = cart.findIndex(p => p.index === item.id);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }

    }


    const removeItem = (itemId) => {
        const productos = cart.filter(item => item.id !== itemId);
        setCart([...productos]);
    }

    const clear = () => {
        setCart([]);
    }

    const inCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const cartTotal = () => {
        return cart.reduce((accum, item) => accum += item.cantidad, 0);
    }

    const cartSuma = () => {
        return cart.reduce((accum, item) => accum += item.cantidad * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal, cartSuma }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;