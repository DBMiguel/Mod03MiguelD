import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito con manejo de stock y toasts
  const addItem = (product, quantity = 1) => {
    let toastMessage = "";

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > product.stock) {
          toast.warning(
            `No puedes agregar más de ${product.stock} unidades de ${product.nombre}`,
            { toastId: `warning-${product.id}` }
          );
          return prevCart;
        }

        toastMessage = `${quantity}  ${product.nombre} agregado al carrito`;

        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }

      if (quantity > product.stock) quantity = product.stock;

      toastMessage = `${quantity}  ${product.nombre} agregado al carrito`;

      return [...prevCart, { ...product, quantity }];
    });

    // 🔹 Dispara el toast con el nombre del producto
    if (toastMessage && !toast.isActive(toastMessage)) {
      toast.success(toastMessage, { toastId: toastMessage });
    }
  };

  // Disminuir cantidad de un item en el carrito
  const decreaseItem = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Eliminar item del carrito
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Total de items en el carrito
  const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  // Total en $ del carrito
  const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
