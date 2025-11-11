import React from "react";
import ItemCard from "./ItemCard";
import "./ItemList.css"; // CSS separado

function ItemList({ items }) {
  if (!items || items.length === 0) return <p>No hay productos</p>;

  return (
    <div className="item-list">
      {items.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
