import React from "react";
import "./ItemListContainer.css";

function ItemListContainer({ onAddToCart }) {
  const productos = [
    { id: 1, titulo: "Producto 1", descripcion: "Descripción 1", precio: 100, 
      image: "https://i.pinimg.com/736x/8d/0d/7b/8d0d7beb3347f944b00c27fcb41804fa.jpg" },
    { id: 2, titulo: "Producto 2", descripcion: "Descripción 2", precio: 200, 
      image: "https://i.pinimg.com/736x/8d/0d/7b/8d0d7beb3347f944b00c27fcb41804fa.jpg" },
    { id: 3, titulo: "Producto 3", descripcion: "Descripción 3", precio: 300, 
      image: "https://i.pinimg.com/736x/8d/0d/7b/8d0d7beb3347f944b00c27fcb41804fa.jpg" },
  ];

  return (
    <div className="item-list-container">
      {productos.map(producto => (
        <div key={producto.id} className="item-card">
          <img 
            src={producto.image || "https://i.pinimg.com/736x/8d/0d/7b/8d0d7beb3347f944b00c27fcb41804fa.jpg"} 
            alt={producto.titulo} 
          />
          <h3>{producto.titulo}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => onAddToCart(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
