import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";
import carritoLogo from "../../assets/carritoLogo.png";


export const CartWidget = () => {
    const { productosTotal } = useContext(CartContext);
    return (
        <>
            <div className="carritoLogo">
                <img src={carritoLogo} alt="logoCarrito" />
                <span> {productosTotal()} </span>
            </div>
        </>
    )
}