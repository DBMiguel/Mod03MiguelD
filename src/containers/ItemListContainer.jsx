import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const { categoryId } = useParams(); // Para filtrar por categoría pendiente agregar mas items y categorías
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos llamada asíncrona
    const fetchProducts = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          if (categoryId) {
            resolve(products.filter((p) => p.categoria === categoryId));
          } else {
            resolve(products);
          }
        }, 500); // retraso simulado 500ms
      });

    setLoading(true);
    fetchProducts().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando productos...</p>;

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Catálogo de Productos</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
