
import { useParams, Navigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { validateId } from "../utils/validateId";
import ItemDetail from "../components/ItemDetail";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const { id } = useParams();

  
  if (!validateId(id)) {
    toast.error("ID de producto inválido");
    return <Navigate to="/notfound" />;
  }

  const { data: product, loading, error } = useProducts({ id });

  if (loading) return <h2>Cargando detalle...</h2>;

  if (error) {
    toast.error("Error al cargar el producto");
    return <h3>Error: {error}</h3>;
  }

  if (!product || product.stock === 0) {
    toast.info("Producto no disponible");
    return <Navigate to="/notfound" />;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
