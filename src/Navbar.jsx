function Navbar() {
  return (
    <nav style={{ backgroundColor: "#ddd", padding: "10px" }}>
      <center> <h2>Mi Tienda React</h2> </center>
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li>Inicio</li>
        <li>Categorías</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;