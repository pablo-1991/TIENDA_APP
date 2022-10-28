import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CustomProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    const isInCart = (id) => {
        const productoExiste = productosCarrito.some((elemento) => elemento.id === id)
        return productoExiste;
    }

    const agregarProducto = (item, quantity) => {
        const nuevosProductos = [...productosCarrito];

        if (isInCart(item.id)) {
            const posicionProducto = nuevosProductos.findIndex((elemento) => elemento.id === item.id);
            nuevosProductos[posicionProducto].quantity += quantity
            nuevosProductos[posicionProducto].quantityPrecio = nuevosProductos[posicionProducto].quantity * nuevosProductos[posicionProducto].precio;
            setProductosCarrito(nuevosProductos)

        } else {
            const nuevoProducto = {
                ...item,
                quantity: quantity,
                quantityPrecio: quantity * item.precio
            };

            nuevosProductos.push(nuevoProducto);
            setProductosCarrito(nuevosProductos);
        }
    }

    const precioTotal = () => {
        const precio = productosCarrito.reduce((acc, curr) => acc + curr.quantityPrecio, 0)
        return precio;
    }

    const productosTotal = () => {
        const prodtotal = productosCarrito.reduce((acc, curr) => acc + curr.quantity, 0)
        return prodtotal;
    }

    const removerItem = (id) => {
        const nuevoProducto = productosCarrito.filter((elemento) => elemento.id !== id)
        setProductosCarrito(nuevoProducto)
    }

    const clear = () => {
        setProductosCarrito([])
    }

    return (
        <CartContext.Provider value={{ productosCarrito, agregarProducto, precioTotal, productosTotal, removerItem, clear }}>
            {children}
        </CartContext.Provider>
    )

}