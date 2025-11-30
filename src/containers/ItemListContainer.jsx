import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import ItemList from "../components/ItemList";
import { CartContext } from "../context/CartContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, addItem, decreaseItem } = useContext(CartContext);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getProducts(categoryId);
        console.log("Productos recibidos:", res);

        if (res.error) {
          console.error(res.error);
          setProducts([]);
        } else {
          setProducts(res.data || []); // 🔹 siempre un array
        }
      } catch (err) {
        console.error("Error inesperado:", err);
        setProducts([]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;
  if (!products || products.length === 0) return <h2 style={{ textAlign: "center" }}>No hay productos disponibles</h2>;

  return (
    <ItemList
      items={products}
      cart={cart}
      addItem={addItem}
      decreaseItem={decreaseItem}
    />
  );
};

export default ItemListContainer;
