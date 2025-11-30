import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/">
          <img src="https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-redes-sociales-facebook_534308-21672.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook" /> // Agregando este link para hacer prueba
        </a>
        <a href="https://x.com/">
          <img src="./public/IMG/Twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="./public/IMG/Instagram.jpg" alt="Twitter" />
        </a>
      </div>
      <p>© 2025 Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
