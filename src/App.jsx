import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <ItemListContainer onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
