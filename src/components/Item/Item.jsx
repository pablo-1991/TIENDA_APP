import { Link } from "react-router-dom";
import "../Item/Item.css";

export const Item = ({ item }) => {
    return (
        <>
            <div className="card">
                <img src={item.imagen} alt={item.nombre} />
                <h2>{item.nombre}</h2>
                <p>Precio: ${item.precio}</p>
                <Link to={`/item/${item.id}`} >
                    <button>Ver Detalles</button>
                </Link>
            </div>
        </>
    )
}