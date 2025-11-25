
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import ItemList from "../components/ItemList";
import { toast } from "react-toastify";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { data: products, loading, error } = useProducts({ category: categoryId });

  const [notified, setNotified] = useState(false);

  // Filtramos productos visibles
  const filteredProducts = (products || []).filter(
    (p) => (!categoryId || p.categoria.toLowerCase() === categoryId.toLowerCase()) && p.stock > 0
  );

  useEffect(() => {
    if (!loading && !error && filteredProducts.length === 0 && !notified) {
      toast.info("No hay productos disponibles en esta categoría");
      setNotified(true);
    }
  }, [loading, error, filteredProducts, notified]);

  if (loading) return <h2>Cargando productos...</h2>;

  if (error) {
    toast.error("Error al cargar los productos");
    return <h3>Error: {error}</h3>;
  }

  if (filteredProducts.length === 0) {
    return <h3>No hay productos disponibles en esta categoría</h3>;
  }

  return <ItemList items={filteredProducts} />;

};

export default ItemListContainer;
