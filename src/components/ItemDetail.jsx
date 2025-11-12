import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);

  if (!product) return <p>Producto no encontrado</p>;

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    alert(`Agregaste ${quantity} ${product.nombre} al carrito`);
  };

  return (
    <div className="text-center">
      <h2>{product.nombre}</h2>
      <img
        src={product.imagen}
        alt={product.nombre}
        style={{ maxWidth: "300px", marginBottom: "15px" }}
      />
      <p>{product.descripcion}</p>

      <div style={{ margin: "10px 0" }}>
        <p className="fw-bold">
          Existencia: {product.stock > 0 ? product.stock : "Agotado"}
        </p>
        <p className="fw-bold">Precio: ${product.precio}</p>
      </div>

      {product.stock > 0 && (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
