// src/components/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD17bk3oof3dYWH4T-4Hs4uK7oSuqUjH0g",
  authDomain: "ecomerce-81720-85392.firebaseapp.com",
  projectId: "ecomerce-81720-85392",
  storageBucket: "ecomerce-81720-85392.firebasestorage.app",
  messagingSenderId: "235277288658",
  appId: "1:235277288658:web:c60e7a3bbb13166ff8590b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);

// Función para traer productos
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items")); // 🔹 tu colección se llama "items"
    if (querySnapshot.empty) {
      console.log("No hay productos en Firestore");
      return [];
    }

    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Productos obtenidos:", products);
    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
