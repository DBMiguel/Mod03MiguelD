import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, addItem, decreaseItem, removeItem, clearCart } =
    useContext(CartContext);

  if (cart.length === 0)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "1.2rem",
        }}
      >
        Tu carrito está vacío
      </p>
    );

  const total = cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />

            <h5 style={{ margin: "5px 0", textAlign: "center" }}>{item.nombre}</h5>
            <p style={{ margin: "5px 0", textAlign: "center", fontSize: "0.9rem" }}>
              {item.descripcion}
            </p>
            <p className="fw-bold" style={{ margin: "5px 0" }}>
              Precio: ${item.precio}
            </p>

            {/* Controles de cantidad */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => decreaseItem(item.id)}
                disabled={item.quantity === 1}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                -
              </button>
              <span style={{ minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
              <button
                onClick={() => {
                  if (item.quantity < item.stock) addItem(item, 1);
                }}
                disabled={item.quantity === item.stock}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>

            <p style={{ margin: "10px 0 0 0", fontWeight: "bold" }}>
              Subtotal: ${item.quantity * item.precio}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                background: "#ff4d4d",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Eliminar ❌
            </button>
          </div>
        ))}
      </div>

      {/* Total general */}
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>Total: ${total}</h3>

      {/* Vaciar carrito */}
      <button
        onClick={clearCart}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default CartPage;
