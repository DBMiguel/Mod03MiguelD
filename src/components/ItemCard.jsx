import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import "../components/ItemCard.css"; // Unificando los estilos 

function ItemCard({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <div
    className="item-card"
    style={{
      width: "220px",
      height: "400px",       // altura fija para todas las tarjetas
      display: "flex",
      flexDirection: "column",
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    }}
  >
    {/* Imagen */}
    <div style={{ textAlign: "center", flexShrink: 0 }}>
      <img
        src={product.imagen}
        alt={product.nombre}
        style={{
          width: "100%",
          height: "180px",     // altura fija de la imagen
          objectFit: "contain",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          marginBottom: "5px",
        }}
      />
    </div>
  
    <div
      style={{
        flex: 1,              
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        textAlign: "center",  
      }}
    >
      <div>
        <h5
          style={{
            margin: "2px 0",
            fontSize: "1rem",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          title={product.nombre}
        >
          {product.nombre}
        </h5>
        <p
          style={{
            margin: "2px 0",
            fontSize: "0.85rem",
            color: "#555",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
          title={product.descripcion}
        >
          {product.descripcion}
        </p>
        <p className="fw-bold" style={{ margin: "2px 0" }}>
          Existencia: {product.stock}
        </p>
        <p className="fw-bold" style={{ margin: "2px 0" }}>
          Precio: ${product.precio}
        </p>
      </div>
  

  
      <div style={{ marginTop: "auto" }}>
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  </div>
  
  );
}

export default ItemCard;
