import "../ItemListCards/ItemListCards.css"
import { Count } from "../ItemCount/ItemCount"



export const ItemListCards = (prop) => {
    return (<>
        <div className="card">
            <img src={prop.imagen} alt="producto" />
            <h2>{prop.nombre}</h2>
            <p>Precio: ${prop.precio}</p>
            <Count stock="10" initial="1"/>
        </div>
    </>
    )

}
