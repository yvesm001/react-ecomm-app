import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import itemsData from "./assets/data.json"
import NotFound from "./pages/NotFound.jsx";

import { useState } from "react";
import EditItem from "./components/EditItem.jsx";

function App() {
  const [items, setItems] = useState(itemsData);
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
      

      <Routes>
        <Route path="/" element={<Dashboard items={items} setItems={setItems} />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/items/edit/:itemId" element ={<EditItem items={items} setItems={setItems}/> } />
      </ Routes>
    </div>
  );
}

export default App;
