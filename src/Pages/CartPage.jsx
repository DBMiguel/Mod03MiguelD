import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Tu carrito está vacío</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              gap: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            {/* Imagen */}
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9"
              }}
            />

            {/* Info del producto */}
            <div style={{ flexGrow: 1 }}>
              <h5 style={{ margin: "0 0 5px 0" }}>{item.nombre}</h5>
              <p style={{ margin: "0 0 5px 0" }}>Cantidad: {item.quantity}</p>
              <p style={{ margin: 0 }}>Precio: ${item.precio}</p>
              <p style={{ margin: 0 }}>{item.precio}</p>
              <p style={{ margin: 0 }}>{item.descripcion}</p>
            </div>

            {/* Botón eliminar */}
            <button
              onClick={() => removeItem(item.id)}
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: "#ff4d4d",
                color: "#fff",
                cursor: "pointer"
              }}
            >
             Eliminar ❌
            </button>
          </div>
        ))}
      </div>

      {/* Vaciar carrito */}
      <button
        onClick={clearCart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default CartPage;
