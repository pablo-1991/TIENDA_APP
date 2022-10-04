import { Count } from "../ItemCount/ItemCount"


export const Item = ({item}) => {
    return (
        <>
        <div className="card">
            <img src={item.imagen} alt="producto" />
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.precio}</p>
            <Count stock="10" initial="1" />
        </div>
    </>
    )
}