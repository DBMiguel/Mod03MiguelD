import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => { if (count < stock) setCount(count + 1); };
  const decrement = () => { if (count > 1) setCount(count - 1); };

  return (
    <div className="text-center mt-2">
      <div className="d-flex justify-content-center gap-2 mb-2">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
