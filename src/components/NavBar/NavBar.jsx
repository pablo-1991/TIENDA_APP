import "./NavBar.css";
import imagenLogo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link, NavLink } from "react-router-dom";

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
                        <Link to="/inicio"><li>INICIO</li></Link>
                        <NavLink to="/categoria/libros"><li>LIBROS</li></NavLink>
                        <NavLink to="/categoria/varitas"><li>VARITAS</li></NavLink>
                        <NavLink to="/categoria/objetos"><li>OBJETOS</li></NavLink>
                        <Link to="/contacto"><li>CONTACTO</li></Link>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export const Contacto = () => {
    return (
        <>
            <div className="contacto">
                <h4>LUMOS! En Wulfric, encontrarás todo lo que estás buscando del universo de Harry Potter! Tenemos todos los libros de la saga, varitas mágicas de distintos magos, y MagiObjetos relacionados con éste apasionante mundo fantástico. También hacemos pedidos en el exterior de algún objeto que te guste, y te lo llevamos a tu casa!
                    Para comunicarte con nosotros, podés llamar a nuestro Call Center: 4441 1234 de lunes a viernes de 8 a
                    20hs, o a nuestro WhatsApp: 011 11 12345678 las 24hs y a la brevedad te responderemos! Si preferís
                    acercarte personalmente, lo podés hacer a Avenida Vélez Sársfield 730, Ciudad de Mar del Plata.</h4>
            </div>
        </>
    )
}