// Mi lista de productos deportivos

export const products = [
  {
    id: 1,
    nombre: "Raqueta de tenis",
    descripcion: "Raqueta profesional con marco de grafito // Aqui deje en 0 como Existencia, por si a futuro se debe simular un Stock de 0, para que no aparezca en el listado, pendiente habilitar y crear codigo del mismo, tambien esta pendiente evitar que se agregue items que superen al stock del almacen al carrito de compras ",
    precio: 1000,
    stock: 0, // Referencia a un producto ya agotado la cual voy a dejar para futuro, de eliminar el item si esta vale 0
    imagen: "/IMG/producto1.jpg",
    categoria: "tenis"
  },
  {
    id: 2,
    nombre: "Balón de fútbol",
    descripcion: "Balón oficial de tamaño 5.",
    precio: 500,
    stock: 8,
    imagen: "/IMG/producto2.jpg",
    categoria: "futbol"
  },
  {
    id: 3,
    nombre: "Guantes de portero",
    descripcion: "Guantes antideslizantes de alta calidad.",
    precio: 300,
    stock: 6,
    imagen: "/IMG/producto3.jpg",
    categoria: "futbol"
  },
  {
    id: 4,
    nombre: "Balón de básquet",
    descripcion: "Balón oficial NBA, tamaño 7.",
    precio: 700,
    stock: 5,
    imagen: "/IMG/producto4.jpg",
    categoria: "basquet"
  }
];
