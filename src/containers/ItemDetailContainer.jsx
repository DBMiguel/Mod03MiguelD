import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/products";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((p) => p.id === parseInt(id)));
        }, 500);
      });

    setLoading(true);
    fetchProduct().then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
