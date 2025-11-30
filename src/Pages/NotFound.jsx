import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "5rem", margin: "0" }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
