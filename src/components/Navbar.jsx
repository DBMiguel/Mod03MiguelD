import React from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#0077cc", color: "white" }}>
      <div style={{ fontWeight: "bold" }}>Inicio </div>
      <div>
        <span style={{ marginRight: "15px" }}>Nosotros</span>
        <span style={{ marginRight: "15px" }}>Servicios</span>
        <span style={{ marginRight: "15px" }}>Contacto</span>
        <span style={{ marginRight: "15px" }}>Preguntas</span>
        
                <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
