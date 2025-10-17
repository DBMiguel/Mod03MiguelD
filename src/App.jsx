import Navbar from "./Navbar";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Container saludo="¡Bienvenid@! Te invito a ver mi catálogo" />
    </div>
  );
}

export default App;