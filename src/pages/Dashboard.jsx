import React from "react";
import List from "../components/List";

export default function Dashboard({ items, setItems }) {
  return (
    <div className="item-list">
      <List items={items} setItems={setItems} />
    </div>
  );
}

/* THIS PAGE RENDERS THE LIST COMPONENT WHICH RENDERS PRODUCTCARD COMPONENTS FOR EACH ITEM.
THIS IS ALSO PASSING PROPS TO LIST WHICH ARE THEN PASSED TO ADDITEM.

   TO MAKE CHANGES TO THE WAY THE ITEMS ARE SHOWN IN THEIR CONTAINERS, DO SO IN PRODUCTCARD
   THE "ITEM-LIST" DIV CREATES A DIV IN THE CENTER OF THE PAGE THAT EXCLUDES THE DIMENSIONS OF NAVBAR/SIDEBAR/FOOTER 
    */
