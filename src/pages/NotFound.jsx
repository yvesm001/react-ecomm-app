import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>The page you're looking for might have been removed, <br>
      </br>renamed or is temporarily unavailable.</p>
        <Link to="/" className="button-link">
        BACK TO HOME
        </Link>
    </div>
  );
}