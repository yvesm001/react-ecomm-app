import { Link } from "react-router-dom"
// import About from "./pages/About";

function Sidebar() {
  return (
    <div className="sidebar">
      <a>Home</a>
    <Link to={"/About"}> <a>About</a> </Link>
    </div>
  );
}
export default Sidebar;
