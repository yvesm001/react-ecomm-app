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

// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//     "images": [
//       "https://cdn.dummyjson.com/product-images/1/1.jpg",
//       "https://cdn.dummyjson.com/product-images/1/2.jpg",
//       "https://cdn.dummyjson.com/product-images/1/3.jpg",
//       "https://cdn.dummyjson.com/product-images/1/4.jpg",
//       "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//     ]
//   },
