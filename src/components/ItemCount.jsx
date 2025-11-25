
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
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={decrease} disabled={count === 1}>-</button>
      <span>{count}</span>
      <button onClick={increase} disabled={count === stock}>+</button>
      <button onClick={handleAdd} disabled={stock === 0}>
        {stock === 0 ? "Agotado" : "Agregar"}
      </button>
    </div>
  );
};

export default ItemCount;


