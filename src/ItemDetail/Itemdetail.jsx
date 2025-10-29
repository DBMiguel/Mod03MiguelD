import React from "react";
import "./ItemDetail.css"; // opcional para estilos propios

function ItemDetail({ titulo, descripcion, precio }) {
  return (
    <div className="item-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
