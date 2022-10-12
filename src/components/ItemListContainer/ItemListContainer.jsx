import "./ItemListContainer.css";
import { ItemListCards } from "../ItemListCards/ItemListCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../BaseDeDatos/BaseDeDatos";


export const ItemListContainer = () => {

    const { categoriaID } = useParams();

    const [products, setProducts] = useState([])

    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
    }

    useEffect(() => { obtenerProductos().then((result) => { setProducts(result) }) }, [])

    useEffect(() => {
        obtenerProductos().then((result) => {
            if (categoriaID) {
                const prodFiltrados = result.filter(elm => elm.categoria === categoriaID);
                setProducts(prodFiltrados)
            }
            else { setProducts(result) }
        })
    }
        , [categoriaID]);

    return (
        <div>
            <ItemListCards items={products} />
        </div>
    )
}