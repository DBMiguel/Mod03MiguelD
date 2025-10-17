function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#eee" }}>
      <div style={{ fontWeight: "bold" }}>Inicio</div>
      <div>
        <span style={{ marginRight: "15px" }}>Lista</span>
        <span style={{ marginRight: "15px" }}>Categorías</span>
        <span>Contacto</span>
      </div>
    </nav>
  );
}

export default Navbar;