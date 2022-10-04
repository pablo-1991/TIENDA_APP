import { useState } from "react";
import "../ItemCount/ItemCount.css";

export const Count = ({stock, initial}) => {
    const [contador, setContador] = useState(1);

    const incrementarCont = () => {
        if (contador < stock) {
        setContador(contador + 1)}
    };

    const disminuirCont = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    };

    const borrarCont = () => {
        if (contador > initial) {
            setContador(contador - contador);
        }
    };

    return (
        <>
            <div className="contador">
                <input placeholder={contador}/>
                <button onClick={disminuirCont}> - </button>
                <button onClick={incrementarCont}>+</button>
                <button onClick={borrarCont}>Borrar</button>
                <button>Detalles</button>
                <button>Añadir al carrito</button>
                <p>Stock: {stock} </p>
            </div>
        </>
    )
}