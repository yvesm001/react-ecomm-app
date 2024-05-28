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

  return (
      <div className="edit-item-container">
        {/* form element must have onSubmit handler, calling our handleSubmit function */}
        <h1>Edit an Item</h1>

        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            name="title"
            type="text"
            value={itemToEdit.title}
            onChange={(event) =>
              setItemToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>Description: </label>
          <input
            name="description"
            type="text"
            // all inputs with initial value corresponding to the property in the movieToEdit state
            value={itemToEdit.description}
            onChange={(event) =>
              setItemToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>Price: </label>
          <input
            name="price"
            type="number"
            value={itemToEdit.price}
            onChange={(event) =>
              setItemToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />

          <label>Discount Percentage </label>
          <input
            name="discountPercentage"
            type="number"
            value={itemToEdit.discountPercentage}
            onChange={(event) =>
              setItemToEdit((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
              }))
            }
          />
          {/* always have a button type="submit" to submit the form and call handleSubmit function */}
          <button type="submit">Submit Changes</button>
        </form>
      </div>
  );
  
}

// NOT COMPLETE, JUST NEED TO ADD RETURN HTML IN THE DIV
