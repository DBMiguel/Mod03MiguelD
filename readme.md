Mod03MiguelD - Web App de E-commerce

Descripción del Proyecto
Mod03MiguelD es una **Single Page Application (SPA)** de e-commerce desarrollada con **React**. 
Permite navegar entre distintos productos, agregar artículos al carrito, y gestionar compras de manera dinámica. El proyecto está organizado siguiendo buenas prácticas de componentes reutilizables, hooks personalizados, contextos y servicios para separar la lógica de la interfaz.

 Estructura de Carpetas

Mod03MiguelD/
├── 📁 public/
│   ├── 📄 IMG/                 ← Imágenes y recursos estáticos
│   └── 📄 index.html            ← HTML principal
├── 📁 src/
│   ├── 📄 App.jsx               ← Componente principal
│   ├── 📄 main.jsx              ← Punto de entrada de React
│   ├── 📄 ndex.css             ← Estilos globales
│   ├── 📁 data/
│   │   └── 📄 products.js       ← Datos de productos
│   ├── 📁 services/             ← Servicios para manejar fetch y lógica de datos
│   │   └── 📄 productService.js ← Funciones para obtener productos
│   ├── 📁 hooks/                ← Hooks personalizados
│   │   └── 📄 useProducts.js    ← Manejo de async, loading y error
│   ├── 📁 context/
│   │   └── 📄 CartContext.jsx   ← Contexto global del carrito
│   ├── 📁 utils/                ← Funciones auxiliares
│   │   └── 📄 ValidateId.js     ← Validación de parámetros
│   ├── 📁 Components/           ← Componentes reutilizables
│   │   ├── 📄 Navbar.jsx
│   │   ├── 📄 CartWidget.jsx
│   │   ├── 📄 ItemList.jsx
│   │   ├── 📄 ItemCard.jsx
│   │   ├── 📄 ItemDetail.jsx
│   │   └── 📄 ItemCount.jsx
│   ├── 📁 containers/           ← Contenedores que manejan lógica y render
│   │   ├── 📄 ItemListContainer.jsx
│   │   └── 📄 ItemDetailContainer.jsx
│   ├── 📁 Pages/                ← Páginas principales de la app
│   │   ├── 📄 CartPage.jsx
│   │   └── 📄 NotFound.jsx
│   └── 📁 styles/               ← Estilos específicos de componentes
│       ├── 📄 ItemCard.css
│       └── 📄 ItemDetail.css
└── 📄 package.json              ← Dependencias y scripts del proyecto


## Tecnologías y Herramientas

- ⚛️ **React**: Librería principal para la construcción de UI.  
- 🪝 **React Hooks**: Manejo de estado y efectos secundarios.  
- 🌐 **Context API**: Gestión global del carrito de compras.  
- 🎨 **CSS / Modular CSS**: Estilos globales y específicos de componentes.  
- 💻 **JavaScript ES6+**: Lógica de negocio y funciones auxiliares.  
- ⚡ **Vite**: Para empaquetado rápido de la app (opcional según setup).  

---

## Funcionalidades Principales

- 📃 **Listado de productos**: Visualización de productos en un listado dinámico.  
- 🔍 **Detalle de producto**: Visualización de detalles de cada producto.  
- 🛒 **Carrito de compras**: Agregar productos al carrito y ver la cantidad seleccionada.  
- 🧩 **Gestión global**: Manejo de estado global del carrito mediante Context API.  
- ✅ **Validación**: Validación de parámetros inválidos en rutas.  
- ⏳ **Estados de carga y error**: Manejo de loading y errores al obtener productos.  
