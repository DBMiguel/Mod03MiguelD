import React from "react";

import { FaCartPlus } from "react-icons/fa";




function CartWidget() {
  return (
    <span style={{ marginLeft: "10px" }}>

      <FaCartPlus size={20} />
           
      <span style={{ marginLeft: "10px" }}> 3</span>
    </span>
  );
}

export default CartWidget;
