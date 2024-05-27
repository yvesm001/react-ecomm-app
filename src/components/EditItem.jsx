import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditItem({ items, editItems }) {
  const { itemId } = useParams();
  console.log("This is the items in Edit", items);

  const [itemToEdit, setItemToEdit] = useState(
    items.find((item) => item.id === itemId)
  );
  console.log("this is the current item to edit", itemToEdit);

  return <div></div>;
}

// THIS COMPONENT IS NOT COMPLETE I JUST SET IT UP AND MESSED AROUND A BIT BUT IT'S NOT FUNCTIONAL
