import { useState } from "react";
import "../ItemCount/ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(1);

    const incrementarCont = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
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
                <button onClick={disminuirCont}>-</button>
                <input placeholder={contador} />
                <button onClick={incrementarCont}>+</button>
                <button onClick={borrarCont}>Borrar</button>
                <button onClick={() => onAdd(contador)}>Añadir</button>
                <p>Stock:{stock}</p>
            </div>
        </>
    )
}