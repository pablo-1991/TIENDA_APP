import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../ItemDetail/ItemDetail.css";


export const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0)
    const {agregarProducto} = useContext(CartContext);


    const addProducto = (quantity) => {
        setCantidad(quantity);
        agregarProducto(item, quantity)
    }

    return (
        <div className="itemDetail">
            <div className="imgDetail">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="descripcion">
                <h3> {item.nombre} </h3>
                <h4>Precio: $ {item.precio} </h4>
                <p> {item.descripcion} </p>
                <h5>Productos agregados: {cantidad} </h5>
                <div className="contador">
                    {cantidad > 0 ? <> <Link to="/inicio"><button>Continuar comprando</button></Link> <Link to="/cart"><button>Terminar la compra</button></Link></> : <ItemCount stock={10} initial={1} onAdd={addProducto} />}
                </div>
            </div>
        </div>
    )
}