// src/components/Navbar.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/productService"; // tu servicio de Firebase

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getProducts(); // trae todos los productos
        if (!res.error && res.data) {
          // Extrae categorías únicas
          
          const cats = [...new Set(res.data.map(p => p.categoria.toLowerCase()))];
          setCategorias(cats);
        }
      } catch (err) {
        console.error("Error obteniendo categorías:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: "#0077be" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: "#fff", fontWeight: "bold" }}>
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
                style={{ color: "#fff", fontWeight: "bold", fontSize: "1rem" }}
              >
                Categorías
              </span>
              <ul className="dropdown-menu" style={{ backgroundColor: "#0077be", minWidth: "150px", textAlign: "center" }}>
                {categorias.map((cat) => (
                  <li key={cat}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${cat}`}
                      style={{ color: "#fff", fontWeight: "bold" }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = "#0095d6"}
                      onMouseLeave={(e) => e.target.style.backgroundColor = "#0077be"}
                    >
                      {cat.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ color: "#fff", fontWeight: "bold" }}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" style={{ color: "#fff", fontWeight: "bold" }}>
                Register
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="btn btn-outline-light position-relative" style={{ fontWeight: "bold" }}>
            <img src="/IMG/trash.svg" alt="Carrito" style={{ width: "24px", marginRight: "5px" }} />
            Carrito
            {totalItems() > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
