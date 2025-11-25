
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) setCount(count + 1);
    else {
    }
  };

  // Disminuye la cantidad en 1 a la vez
  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  // Agregar al carrito
  const handleAdd = () => {
    onAdd(count); 
  };

  return (
<div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // centra los botones dentro del cuadro
    gap: "10px",
    marginTop: "5px",
  }}
>
  <button
    onClick={decrease}
    disabled={count === 1}
    style={{
      width: "35px",
      height: "35px",
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
  <span style={{ minWidth: "20px", textAlign: "center", fontWeight: "bold" }}>
    {count}
  </span>
  <button
    onClick={increase}
    disabled={count === stock}
    style={{
      width: "35px",
      height: "35px",
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
  <button
    onClick={handleAdd}
    disabled={stock === 0}
    style={{
      padding: "5px 12px",
      borderRadius: "5px",
      border: "none",
      background: "#007bff",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    }}
  >
    {stock === 0 ? "Agotado" : "Agregar"}
  </button>
</div>

  );
};

export default ItemCount;


