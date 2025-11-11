import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { products } from "../Data/products";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  // Filtro para aplicar en los productos
  const categorias = [...new Set(products.map((p) => p.categoria))];

  return (
    <nav className="navbar navbar-light bg-light p-3 d-flex justify-content-between">
      <div>
        <Link to="/" className="navbar-brand">
          Inicio -- Bienvenidos a mi Tienda⚾
        </Link>
        {categorias.map((cat) => (
          <Link key={cat} to={`/category/${cat}`} className="btn btn-link">
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>

      <Link to="/cart" className="btn btn-outline-primary position-relative">
      <img 
    src="/IMG/trash.svg" 
    alt="Carrito" 
    style={{ width: "24px", marginRight: "5px" }}
      />

        Carrito    
        {totalItems() > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems()}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
