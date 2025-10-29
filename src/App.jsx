import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    console.log("Botón clic");
    setCounter(counter + 1);
  };

  return (
    <div>
      <Navbar />
      <Container />
      <Footer />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Contador: {counter}</p>
        <button onClick={handleIncrementCounter}>Incrementar</button>
      </div>
    </div>
  );
}

export default App;
