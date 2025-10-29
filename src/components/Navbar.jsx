import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "../styles/main.css"; // Importa los estilos globales

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Inicio</div>

      <div className="navbar-menu">
        <a href="">Nosotros</a>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <a href="">Preguntas</a>

        <span className="navbar-cart">
          <FaCartPlus size={20} />
          <span className="cart-count">{cartCount}</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
