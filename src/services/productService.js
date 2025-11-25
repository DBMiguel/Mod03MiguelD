
import { products } from "../data/products";


// Obtener todos los productos o filtrados por categoría
export const getProducts = async (category = null) => {
  try {
    let filtered = products;

    if (category) {
      filtered = products.filter(
        (p) => p.categoria.toLowerCase() === category.toLowerCase()
      );
    }

    return {
      data: filtered, 
      error: null
    };

  } catch (err) {
    return {
      data: [],
      error: "Error al obtener los productos"
    };
  }
};

export const getProductById = async (id) => {
  try {
    const product = products.find((p) => p.id === Number(id));

    return {
      data: product || null, 
      error: null
    };

  } catch (err) {
    return {
      data: null,
      error: "Producto no encontrado"
    };
  }
};
