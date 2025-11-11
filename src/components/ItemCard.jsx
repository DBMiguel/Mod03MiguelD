import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "./ItemCard.css"; // nuevo archivo CSS

function ItemCard({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    alert(`Agregaste ${quantity} ${product.nombre} al carrito`);
  };

  return (
    <div className="item-card card p-3 shadow-sm">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="item-card-img"
      />
      <h5>{product.nombre}</h5>
      <p>{product.descripcion}</p>
      <p className="fw-bold">${product.precio}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemCard;
