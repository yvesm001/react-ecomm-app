import React, { useState } from "react";
import ProductCard from "./ProductCard";
import AddItem from "./AddItem";

export default function List({ items, setItems }) {
  return (
    <div>
      <AddItem setItems={setItems} />

      {/* RENDER PRODUCTCARD FOR EACH ITEM TO DISPLAY LIST OF ITEMS */}
      <h1>Item List</h1>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}

//THIS COMPONENT RENDERS EACH PRODUCTCARD FOR THE ITEMS AND DISPLAYS THEM ON DASHBOARD PAGE. IT ALSO RENDERS THE ADDITEM FORM
