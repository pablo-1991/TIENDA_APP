import "../ItemListCards/ItemListCards.css"
import { Item } from "../Item/Item"

export const ItemListCards = ({items}) => {

    return (
        <>
            <div className="mainContainer">
                {items.map(elm => {
                    return (
                        <Item key={elm.id} nombre={elm.nombre} precio={elm.precio} imagen={elm.imagen} item={elm} />
                    )
                })
                }
            </div>
        </>
    )
}
