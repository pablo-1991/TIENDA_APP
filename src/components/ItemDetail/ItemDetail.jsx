import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({ item }) => {
    return (
        <div className="itemDetail">
            <div className="imgDetail">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="descripcion">
                <h3> {item.nombre} </h3>
                <h4>Precio: $ {item.precio} </h4>
                <p> {item.descripcion} </p>
            </div>
        </div>
    )
}