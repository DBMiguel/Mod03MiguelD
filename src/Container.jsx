function Container(props) {
  console.log("Props recibidas en Container:", props);

  return (
    <div
      style={{
        margin: "40px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #60c9d9ff",
        width: "80%",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2>{props.saludo}</h2>
      <p>Aquí pronto verás el catálogo de productos.</p>
    </div>
  );
}

export default Container;