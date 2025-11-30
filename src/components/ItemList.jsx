import React from "react";

const ItemList = ({ items, cart, addItem, decreaseItem }) => {
  return (
    <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      {items.map(item => {
        

        const cartItem = cart.find(ci => ci.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              style={{ width: "100%", height: "180px", objectFit: "contain", borderRadius: "5px" }}
            />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>



            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => decreaseItem(item.id)}
                disabled={quantity === 0}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  cursor: quantity === 0 ? "not-allowed" : "pointer"
                }}
              >
                -
              </button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>{quantity}</span>

              <button
                onClick={() => addItem(item, 1)}
                disabled={quantity === item.stock}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  cursor: quantity === item.stock ? "not-allowed" : "pointer"
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
