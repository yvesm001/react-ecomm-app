// THIS COMPONENT RENDERS THE LIST OF ITEMS AND THE FORM TO ADD AN ITEM

import React, { useState } from "react";
import itemsData from "../assets/data.json";
import ProductCard from "./ProductCard";

export default function List() {
  const [itemsList, setItemsList] = useState(itemsData);

  //USE STATES FOR ADD ITEM FORM
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

  //PREVENTING PAGE RELOAD WHEN CLICKING SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();

    //CREATING NEW ITEM
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

    //ADDING NEW ITEM TO ITEMLIST
    setItemsList((prev) => [newItem, ...prev]);

    //RESETTING VALUES
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
    <div>
      {/* FORM */}
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Add an Item</h1>

            {/* SET ITEM ID */}
            <label>
              ID
              <input
                name="id"
                type="number"
                placeholder="ID"
                onChange={(event) => setId(event.target.value)}
              />
            </label>

            {/* SET ITEM TITLE */}
            <label>
              Title
              <input
                name="title"
                type="text"
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>

            {/* SET ITEM DESCRIPTION */}
            <label>
              Description
              <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>

            {/* SET ITEM PRICE */}
            <label>
              Price
              <input
                name="price"
                type="number"
                placeholder="Price"
                onChange={(event) => setPrice(event.target.value)}
              />
            </label>

            {/* SET ITEM DISCOUNT PERCENTAGE */}
            <label>
              Discount Percentage
              <input
                name="discountPercentage"
                type="number"
                placeholder="Discount Percentage"
                onChange={(event) => setDiscountPercentage(event.target.value)}
              />
            </label>

            {/* SET ITEM RATING */}
            <label>
              Rating
              <input
                name="rating"
                type="number"
                placeholder="Rating"
                onChange={(event) => setRating(event.target.value)}
              />
            </label>

            {/* SET ITEM STOCK */}
            <label>
              Stock
              <input
                name="stock"
                type="number"
                placeholder="Stock"
                onChange={(event) => setStock(event.target.value)}
              />
            </label>

            {/* SET ITEM BRAND */}
            <label>
              Brand
              <input
                name="brand"
                type="text"
                placeholder="Brand"
                onChange={(event) => setBrand(event.target.value)}
              />
            </label>

            {/* SET ITEM CATEGORY */}
            <label>
              Category
              <input
                name="cateogry"
                type="text"
                placeholder="Category"
                onChange={(event) => setCategory(event.target.value)}
              />
            </label>

            {/* SET ITEM THUMBNAIL */}
            <label>
              Thumbnail
              <input
                name="thumbnail"
                type="text"
                placeholder="Thumbnail"
                onChange={(event) => setThumbnail(event.target.value)}
              />
            </label>

            {/* SET ITEM IMAGES */}
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
      </div>

      {/* RENDER PRODUCTCARD FOR EACH ITEM TO DISPLAY LIST OF ITEMS */}
      <h2>Item List</h2>
      {itemsList.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
