import { Link } from "react-router-dom";
import '../css/Navbar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">Movie App</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/favorites" className="nav-link">
            FAVORITES
          </Link>
        </div>
      </div>
    </nav>
  );
}
 export default NavBar;