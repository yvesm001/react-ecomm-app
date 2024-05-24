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

          {/* Back button */}
          <Link to="/">Back
          <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ItemDetails


