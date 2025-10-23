import React from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#0077cc",
        color: "white"
      }}
    >
      <div style={{ fontWeight: "bold" }}>Inicio</div>
      <div>
        <a href="" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Nosotros
        </a>
        <a href="" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Servicios
        </a>
        <a href="" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Contacto
        </a>
        <a href="" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Preguntas
        </a>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
