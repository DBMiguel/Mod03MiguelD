
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase/firebase";


export const getProducts = async (category = null) => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    if (querySnapshot.empty) return { data: [], error: null };

    let data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (category) {
      data = data.filter(
        (p) => p.categoria.toLowerCase() === category.toLowerCase()
      );
    }

    return { data, error: null };
  } catch (err) {
    console.error("Error al obtener productos:", err);
    return { data: [], error: "Error al obtener productos" };
  }
};



export const getProductById = async (id) => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const product = data.find((p) => p.id === id || p.id === Number(id));

    return { data: product || null, error: null };
  } catch (err) {
    console.error("Error al obtener producto por id:", err);
    return { data: null, error: "Producto no encontrado" };
  }
};
