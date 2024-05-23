import { useParams, Link, Navigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ItemDetails({ items }) {
  const { itemsId } = useParams();

  const oneItem = item.find((item) => item._id === itemId);

  return (
    <div>
      <h1>Item Details</h1>
      {!oneItem && <Navigate to="/items" />}
      {oneItem && (
        <>
          <ProductCard />
          <Link to="/">Back</Link>
        </>
      )}
    </div>
  )
}

export default ItemDetails


// "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       "images": [