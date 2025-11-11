import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  if (!items || items.length === 0) return <p>No hay productos</p>;

  return (
    <div
      className="item-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "-8px" // para compensar el margin de cada tarjeta
      }}
    >
      {items.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
