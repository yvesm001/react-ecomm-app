import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import itemsData from "./assets/data.json";
import NotFound from "./pages/NotFound.jsx";
import AddItem from "./components/AddItem.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
      

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
