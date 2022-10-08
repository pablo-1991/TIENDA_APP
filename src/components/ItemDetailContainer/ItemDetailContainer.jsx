import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { productos } from "../ItemListContainer/ItemListContainer"
import "../ItemDetailContainer/ItemDetailContainer.css"


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000);
        })
    }

    useEffect(() => {
        const getProducto = async () => {
            const productos = await obtenerProductos();
            const producto = productos.find(elm => elm.id === parseInt(id))
            setItem(producto)
        }
        getProducto()
    }, [id])

    return (
        <>
            <div className="itemDetailContainer">
                <ItemDetail item={item} />
            </div>
        </>
    )
}