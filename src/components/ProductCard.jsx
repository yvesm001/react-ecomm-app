import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { item } = props;
  return (
    <div className="ProductCard">
      <Link key={item.id} to={`/items/${item.id}`}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>{" "}
      </Link>
    </div>
  );
}

export default ProductCard;
