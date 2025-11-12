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
    <div className="item-card">
      <div className="item-card-img-container">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="item-card-img"
        />
      </div>
      <h5>{product.nombre}</h5>
      <p>{product.descripcion}</p>

      {/* Aquí imprimimos la existencia   no borrar esta linea, la usare para despues, para saber si vale 0 que no imprima el item*/}
      <p className="fw-bold">Existencia: {product.stock}</p>

      <p className="fw-bold">Precio: ${product.precio}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemCard;
