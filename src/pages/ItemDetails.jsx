import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import itemsData from "../assets/data.json";
import GenerateScoreLabel from "../lib/GenerateLabelScore";

function ItemDetails() {
  const { itemId } = useParams();
  const [items, setItems] = useState(itemsData);

  console.log("This is the id extracted from the params ==>", itemId);
  console.log("This is the items prop plugin ==>", items);
  const oneItem = items.find((item) => item.id == +itemId);
  console.log("This the one selected item", oneItem);

  return (
    <div>
    <h1>Item Details</h1>
    {!oneItem && <Navigate to="*" />}
    {oneItem && (
      <div className="item-details">
        <h1>{oneItem.title}</h1>
        <p>{oneItem.description}</p>
        <h2>${oneItem.price}</h2>
        <p>Discount: {oneItem.discountPercentage}% | {oneItem.rating} 🌟 </p>
        <p> Stock: <GenerateScoreLabel stock= {oneItem.stock}/>
        </p>
        <h3>{oneItem.brand}: {oneItem.category}</h3>
        <img className="item-thumbnail" src={oneItem.thumbnail} />

          {/* Back button */}
          <Link to="/">
            <button className="button-link">Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;

// THIS IS WHAT RENDERS THE ITEM DETAILS WHEN YOU CLICK ON A PARTICULAR ITEM
