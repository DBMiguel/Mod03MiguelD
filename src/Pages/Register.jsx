import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>Página de Registro</h2>
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Register;
