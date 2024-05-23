import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/items/:itemsId"
          element={<ItemDetails items={itemsData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
