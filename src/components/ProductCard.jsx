import React from "react";

function ProductCard(props) {
  const { item } = props;
  return (
    <div className="ProductCard">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default ProductCard;


