import React from "react";

function ProductCard(props) {
  const { item } = props;
  return (
    <div className="ProductCard">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.discountPercentage}</p>
      <p>{item.rating}</p>
      <p>{item.stock}</p>
      <p>{item.brand}</p>
      <p>{item.category}</p>
      <p>{item.thumbnail}</p>
      <p>{item.images}</p>
    </div>
  );
}

export default ProductCard;


