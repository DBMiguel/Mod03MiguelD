import React from "react";
import "./Itemlist.css";

const ItemList = ({ items, cart, addItem, decreaseItem }) => {
  return (
    <div className="item-list-grid-stretch">
      {items.map((item) => {
        const cartItem = cart.find((ci) => ci.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div key={item.id} className="item-card">
            <img src={item.imagen} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p className="item-card-description">{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>

            <div className="item-card-footer">
              <button
                onClick={() => decreaseItem(item.id)}
                disabled={quantity === 0}
                className="item-card-button"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => addItem(item, 1)}
                disabled={quantity === item.stock}
                className="item-card-button"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
