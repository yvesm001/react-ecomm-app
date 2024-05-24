import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/"}>
        {" "}
        <a>Home</a>
      </Link>
      <Link to={"/about"}>
        {" "}
        <a>About</a>{" "}
      </Link>
    </div>
  );
}
export default Sidebar;
