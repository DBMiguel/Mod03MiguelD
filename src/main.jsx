import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";      // estilos globales
import "./styles/main.css"; // navbar, botones, footer
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // para funcionalidades de Bootstrap como el dropdown
import "./components/ItemCard";    // tarjetas/productos (último cambio)



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
