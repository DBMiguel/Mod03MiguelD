import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, addItem, decreaseItem, removeItem, clearCart } =
    useContext(CartContext);

  if (cart.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Tu carrito está vacío
      </p>
    );

  // Total general del carrito
  const total = cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              width: "calc(25% - 20px)",
              minWidth: "220px",
            }}
          >
            {/* propiedas de la Imagen */}
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            {/* Info del producto */}
            <h5 style={{ margin: "5px 0" }}>{item.nombre}</h5>
            <p style={{ margin: "5px 0" }}>{item.descripcion}</p>
            <p style={{ margin: "5px 0" }}>Precio: ${item.precio}</p>

            {/* Controles de cantidad */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                margin: "10px 0",
              }}
            >
              <button
                onClick={() => decreaseItem(item.id)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#ccc",
                  cursor: "pointer",
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => {
                  if (item.quantity < item.stock) {
                    addItem(item, 1);
                  }
                }}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>

            {/* Subtotal por producto */}
            <p style={{ margin: "5px 0" }}>
              Subtotal: ${item.quantity * item.precio}
            </p>

            {/* Botón eliminar */}
            <button
              onClick={() => removeItem(item.id)}
              style={{
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
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        Total: ${total}
      </h3>

      {/* Vaciar carrito */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={clearCart}
          style={{
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default CartPage;
