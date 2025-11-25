import React from "react";
import ItemCard from "./ItemCard";
import "../components/ItemList.css";

function ItemList({ items }) {
  if (!items || items.length === 0) return <p>No hay productos</p>;

  return (
    <div className="item-list-flex">
      {items.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
