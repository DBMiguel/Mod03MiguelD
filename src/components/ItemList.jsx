import React from "react";
import ItemCard from "./ItemCard";

function ItemList({ items }) {
  if (!items || items.length === 0) return <p>No hay productos</p>;

  return (
    <div
      className="item-list-flex"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px 0"
      }}
    >
      {items.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
