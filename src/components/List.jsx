import React, { useState } from "react";
import itemsData from "../assets/data.json";
import ProductCard from "./ProductCard";

export default function List() {
  const [itemsList, setItemsList] = useState(itemsData);
  return (
    <div>
      <h2>Item List</h2>
      {itemsList.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>

    // div className="item-list-div">
    //   {itemsList.map((item) => {
  ); //     return (
  //       <div key={item.id} className="item-div">
  //         <h3>{item.title}</h3>
  //         <p>{item.description}</p>
  //         <img src={item.images[0]} />
  //         <p>${item.price}</p>
  //       </div>
  //     );
  //   })}
  // </div>
}
