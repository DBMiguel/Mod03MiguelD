import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  const categorias = [...new Set(products.map((p) => p.categoria))];

  // Estilos generales
  const navbarStyle = {
    backgroundColor: "#1E90FF", 
    fontFamily: "Arial, sans-serif",
  };

  const dropdownItemStyle = {
    color: "#fff",
    backgroundColor: "#1E90FF",
    transition: "0.2s",
  };

  const dropdownItemHover = (e) => {
    e.target.style.backgroundColor = "#00BFFF"; 
  };

  const dropdownItemLeave = (e) => {
    e.target.style.backgroundColor = "#1E90FF";
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark p-3"
      style={navbarStyle}
    >
      <Link
        to="/"
        className="navbar-brand"
        style={{ fontWeight: "bold", color: "#fff" }}
      >
        Inicio -- Bienvenidos a mi Tienda⚾
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto">

          <li className="nav-item dropdown">
          <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              style={{ 
                cursor: "pointer",
                fontSize: "1.2rem", 
                fontWeight: "bold", 
                color: "#fff"       
              }}
            >
              Categorías
            </span>


            <ul className="dropdown-menu" style={{ backgroundColor: "#1E90FF" }}>
              {categorias.map((cat) => (
                <li key={cat}>
                  <Link
                    className="dropdown-item"
                    to={`/category/${cat}`}
                    style={dropdownItemStyle}
                    onMouseEnter={dropdownItemHover}
                    onMouseLeave={dropdownItemLeave}
                  >
                    {cat.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <Link
          to="/cart"
          className="btn btn-outline-light position-relative"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
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
      </div>
    </nav>
  );
}

export default Navbar;
