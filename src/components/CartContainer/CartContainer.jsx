import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../utils/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { Link } from "react-router-dom"
import carritoVacio from "../../assets/cart.png"
import "./CartContainer.css"
import Swal from "sweetalert2"

export const CartContainer = () => {
    const value = useContext(CartContext)
    const { productosCarrito, precioTotal, productosTotal, removerItem, clear, disminuirCont, incrementarCont } = value;
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
                email: evt.target[3].value,
                confEmail: evt.target[4].value
            },
            productos: productosCarrito,
            total: precioTotal(),
            fecha: serverTimestamp()
        }
        const queryRef = collection(db, "pedidos")
        addDoc(queryRef, compra).then((result) => setCompraID(result.id))

        if (form.nombre == "" || form.apellido == "" || form.telefono == "" || form.email == "" || form.confEmail == "") {
            Swal.fire
                ({
                    icon: "error",
                    title: "Por favor complete todos los datos",
                })
        }

        else if (form.email != form.confEmail) {
            Swal.fire
                ({
                    icon: "warning",
                    title: "El E-mail no coincide",
                })
        }

        else if (compraID) {
            Swal.fire({icon:"success",
            title:"Muchas gracias por tu compra!",
            text: "Su compra fue realizada bajo el numero de orden de: " + compraID, 
            });
            clear();
        }
    }

    {
        if (productosCarrito == 0) {
            return (<div className="carritoVacio">
                <img src={carritoVacio} alt="logo de carrito" />
                <h2>No hay productos agregados en tu carrito!</h2>
                <Link to="/inicio"><button>INICIO</button></Link></div>
            )
        }

        else {
            return (
                <div className="cartPage">
                    {productosCarrito.map((producto) => {
                        return <div className="datosCompra" key={producto.id}>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <h4>Precio: ${producto.precio}</h4>
                            <h4>Cantidad: {producto.quantity}</h4>
                            <h4>Precio por Cantidad: ${producto.quantityPrecio}</h4>
                            <button onClick={() => removerItem(producto.id)} >Eliminar</button>
                        </div>
                    })
                    }
                    <div className="datosTotal">
                        <h4>Total: ${precioTotal()} </h4>
                        <h4>Total de productos: {productosTotal()} </h4>
                        <button onClick={() => clear()}>Borrar Todo</button>
                    </div>
                    <div className="form">
                        <form onSubmit={enviarOrden} className="formulario" >
                            <label for="nombre">Nombre/s:</label>
                            <input type="text" name="nombre" onChange={(evt) => onChangeForm(evt)} placeholder="Nombre/s" />
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" onChange={(evt) => onChangeForm(evt)} placeholder="Apellido" />
                            <label for="telefono">Tel/Cel</label>
                            <input type="number" name="telefono" onChange={(evt) => onChangeForm(evt)} placeholder="Ej: 1130620018" />
                            <label for="email">E-Mail</label>
                            <input type="email" name="email" onChange={(evt) => onChangeForm(evt)} placeholder="ejemplo@hotmail.com" />
                            <label for="email">Confirmar E-Mail</label>
                            <input type="email" name="confEmail" onChange={(evt) => onChangeForm(evt)} placeholder="ejemplo@hotmail.com" />
                            <button type="submit" className="submit" >Comprar</button>
                        </form >
                    </div>
                </div >)
        }
    }
}
