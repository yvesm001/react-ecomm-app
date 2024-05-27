import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="ProductCard">
      <Link key={item.id} to={`/items/${item.id}`}>
        <h1>{item.title}</h1>
        <img className="item-thumbnail" src={item.thumbnail} />
        <p>{item.description}</p>
        <p>${item.price}</p>{" "}
      </Link>
    </div>
  );
}

export default ProductCard;

// THIS IS THE CARD FOR EACH ITEM AS SHOWN ON THE DASHBOARD ITEM LIST
