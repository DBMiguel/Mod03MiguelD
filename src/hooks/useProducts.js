
import { useEffect, useState } from "react";
import { getProducts, getProductById } from "../services/productService";

export const useProducts = ({ id = null, category = null }) => {
  const [data, setData] = useState([]);       
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      let response;

      if (id) {
        response = await getProductById(id);
      } else {
        response = await getProducts(category);
      }

      setData(response.data || response || []);
      setError(response.error);
      setLoading(false);
    };

    fetchData();
  }, [id, category]);

  return { data, loading, error };
};
