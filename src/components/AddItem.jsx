import { useState } from "react";
import itemsData from "../assets/data.json";

function AddItem() {
  const [itemsList, setItemsList] = useState(itemsData);

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setbrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  //   const [images, setImages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    };

    setItemsList((prev) => [newItem, ...prev]);

    setId(0);
    setTitle("");
    setDescription("");
    setPrice(0);
    setDiscountPercentage(0);
    setRating(0);
    setStock(0);
    setbrand("");
    setCategory("");
    setThumbnail("");
  };

  return (
    <div className="form-div">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add an Item</h1>
          <label>
            ID
            <input
              name="id"
              type="number"
              placeholder="ID"
              onChange={(event) => setId(event.target.value)}
            />
          </label>

          <label>
            Title
            <input
              name="title"
              type="text"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            Description
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>

          <label>
            Price
            <input
              name="price"
              type="number"
              placeholder="Price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <label>
            Discount Percentage
            <input
              name="discountPercentage"
              type="number"
              placeholder="Discount Percentage"
              onChange={(event) => setDiscountPercentage(event.target.value)}
            />
          </label>

          <label>
            Rating
            <input
              name="rating"
              type="number"
              placeholder="Rating"
              onChange={(event) => setRating(event.target.value)}
            />
          </label>

          <label>
            Stock
            <input
              name="stock"
              type="number"
              placeholder="Stock"
              onChange={(event) => setStock(event.target.value)}
            />
          </label>

          <label>
            Brand
            <input
              name="brand"
              type="text"
              placeholder="Brand"
              onChange={(event) => setBrand(event.target.value)}
            />
          </label>

          <label>
            Category
            <input
              name="cateogry"
              type="text"
              placeholder="Category"
              onChange={(event) => setCategory(event.target.value)}
            />
          </label>

          <label>
            Thumbnail
            <input
              name="thumbnail"
              type="text"
              placeholder="Thumbnail"
              onChange={(event) => setThumbnail(event.target.value)}
            />
          </label>

          {/* <label>
            Images
            <input
              name="images"
              type="text"
              placeholder="Images"
              onChange={(event) => setImages(event.target.value)}
            />
          </label> */}
          <button type="submit">Add Item</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}

export default AddItem;
