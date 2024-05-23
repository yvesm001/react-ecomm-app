import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />

      <div className="item-list">
        <List />
      </div>
    </div>
  );
}

export default App;
