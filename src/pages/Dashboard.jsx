import React from "react";
import List from "../components/List";
import AddItem from "../components/AddItem";

export default function Dashboard() {
  return (
    <div className="add-item-div">
      <AddItem />
      <div className="item-list">
        <List />
      </div>
    </div>
  );
}

/* THIS PAGE RENDERS THE LIST COMPONENT. 
   TO MAKE CHANGES TO THE WAY THE LIST IS DISPLAYED DO SO IN THE LIST COMPONENT FILE
   THE "ITEM-LIST" DIV CREATES A DIV IN THE CENTER OF THE PAGE THAT EXCLUDES THE DIMENSIONS OF NAVBAR/SIDEBAR/FOOTER  */

//  NEEDS ADD NEW ITEM FORM COMPONENT
