import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <header>
        <h2>John Stone</h2>
        <nav>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
