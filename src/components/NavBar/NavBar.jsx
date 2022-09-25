import "./NavBar.css";
import imagenLogo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <img src={imagenLogo} alt="logo" />
                    <h1>Wulfric</h1>
                </div>
                <div className="links">
                    <ul>
                        <li>QUÉ VENDEMOS?</li>
                        <li>TIENDA</li>
                        <li>FORMAS DE PAGO</li>
                        <li>CONTACTO</li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}