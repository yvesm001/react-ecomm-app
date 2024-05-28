import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditItem({ items, setItems }) {
  const { itemId } = useParams();

  const navigate = useNavigate();

  // console.log("This is the items in Edit", items);

  const [itemToEdit, setItemToEdit] = useState(
    items.find((item) => item.id == +itemId)
  );

  console.log("this is the current item to edit", itemToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    setItems((prev) =>
      prev.map((item) => {
        if (item.id == +itemId) {
          item = itemToEdit;
        }
        return item;
      })
    );

    navigate("/");
  };

  return <div></div>;
}

// NOT COMPLETE, JUST NEED TO ADD RETURN HTML IN THE DIV
