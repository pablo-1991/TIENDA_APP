import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../utils/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import "./CartContainer.css"
import Swal from "sweetalert2"

export const CartContainer = () => {
    const value = useContext(CartContext)
    const { productosCarrito, precioTotal, productosTotal, removerItem, clear } = value;
    const [compraID, setCompraID] = useState("");
    const [form, setForm] = useState({ nombre: "", apellido: "", telefono: "", email: "" })

    function onChangeForm(evt) {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        })
    }

    const enviarOrden = (evt) => {
        evt.preventDefault()
        const compra = {
            comprador: {
                nombre: evt.target[0].value,
                apellido: evt.target[1].value,
                telefono: evt.target[2].value,
                email: evt.target[3].value
            },
            productos: productosCarrito,
            total: precioTotal(),
            fecha: serverTimestamp()
        }
        const queryRef = collection(db, "pedidos")
        addDoc(queryRef, compra).then((result) => setCompraID(result.id))
    }

    {
        if (productosCarrito === 0) {
            return (
                <p>no hay productos</p>
            )
        } else if (compraID) {
            return (
                Swal.fire("Muchas gracias por tu compra!", "Su compra fue realizada bajo el numero de orden de: " + compraID, "success") && <><p>Debe agregar productos</p></>)
        }
        else {
            return (
                <>
                    {productosCarrito.map((producto) => {
                        return <div key={producto.id}>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                            <p>Cantidad: {producto.quantity}</p>
                            <p>Precio por Cantidad: ${producto.quantityPrecio}</p>
                            <button onClick={() => removerItem(producto.id)} >Eliminar</button>
                        </div>
                    })}
                    <div>
                        <p>Total: {precioTotal()} </p>
                        <p>Total de productos: {productosTotal()} </p>
                        <button onClick={() => clear()} >Borrar Todo</button>
                        <form onSubmit={enviarOrden} className="formulario">
                            <label for="nombre">Nombre/s:</label>
                            <input type="text" name="nombre" onChange={(evt) => onChangeForm(evt)} placeholder="Nombre/s" />
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" onChange={(evt) => onChangeForm(evt)} placeholder="Apellido" />
                            <label for="telefono">Tel/Cel</label>
                            <input type="number" name="telefono" onChange={(evt) => onChangeForm(evt)} placeholder="Ej: 1130620018" />
                            <label for="email">E-Mail</label>
                            <input type="email" name="email" onChange={(evt) => onChangeForm(evt)} placeholder="ejemplo@hotmail.com" />
                            <button type="submit" className="submit" >Enviar</button>
                        </form>
                    </div>
                </>
            )
        }
    }
}