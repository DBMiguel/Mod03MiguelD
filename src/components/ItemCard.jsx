import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemCard({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    alert(`Agregaste ${quantity} ${product.nombre} al carrito`);
  };

  return (
    <div
      className="card p-3 shadow-sm"
      style={{
        width: "calc(25% - 16px)", // 4 tarjetas por fila
        margin: "8px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
        src={product.imagen}
        alt={product.nombre}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "8px"
        }}
      />
      <h5>{product.nombre}</h5>
      <p>{product.descripcion}</p>
      <p className="fw-bold">${product.precio}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemCard;
