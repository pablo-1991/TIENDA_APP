import "./CartWidget.css";
import carritoLogo from "../../assets/carritoLogo.png";

export const CartWidget = () => {
    return (
        <>
            <div className="carritoLogo">
                <img src={carritoLogo} alt="logoCarrito" />
                <span>0</span>
            </div>
        </>
    )
}