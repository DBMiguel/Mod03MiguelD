// Pagina del carrito de compras

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Tu carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.nombre} - {item.quantity} unidades
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}

export default CartPage;
