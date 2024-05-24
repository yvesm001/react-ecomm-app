import { useParams, Link, Navigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import itemsData from "../assets/data.json";

function ItemDetails({ items }) {
  const { itemsId } = useParams();
  console.log("This is the id extracted from the params ==>", itemsId);
  console.log("This is the items prop plugin ==>", items);
  const oneItem = itemsData.find((item) => item.id === itemsId);
  console.log("This the one selected item", oneItem);

  return (
    <div>
      <h1>Item Details</h1>
      {/* {!oneItem && <Navigate to="*" />} */}
      {oneItem && (
        <>
          <h1>{oneItem.title}</h1>
          <p>{oneItem.description}</p>
          <p>{oneItem.price}</p>
          <p>{oneItem.discountPercentage}</p>
          <p>{oneItem.rating}</p>
          <p>{oneItem.stock}</p>
          <p>{oneItem.brand}</p>
          <p>{oneItem.category}</p>
          <p>{oneItem.thumbnail}</p>
          <p>{oneItem.images}</p>

          {/* Back button */}
          <Link to="/">
            Back
            <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
