import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h2>Página de Login</h2>
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
