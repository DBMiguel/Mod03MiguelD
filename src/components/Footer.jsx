import React from "react";
import "../App.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/">
          <img src="./public/IMG/facebook.png" alt="Facebook" />
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
