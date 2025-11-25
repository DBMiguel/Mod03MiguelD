import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { products } from "../Data/products";

function Navbar() {
  const { totalItems } = useContext(CartContext);
  const categorias = [...new Set(products.map((p) => p.categoria))];

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
              <ul
                className="dropdown-menu"
                style={{
                  backgroundColor: "#0077be",
                  minWidth: "150px",
                  textAlign: "center",
                }}
              >
                {categorias.map((cat) => (
                  <li key={cat}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${cat}`}
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#0095d6";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#0077be";
                      }}
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
            style={{ fontWeight: "bold" }}
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
      </div>
    </nav>
  );
}

export default Navbar;
