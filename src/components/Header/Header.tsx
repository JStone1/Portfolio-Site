import "./Header.scss";
import Nav from "@components/Nav/Nav";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="logo-title-container">
          <NavLink to="/">
            <img className="logo" src="/assets/jslogo.svg" />
          </NavLink>
          <h2>John Stone</h2>
        </div>
        <Nav />
      </header>
    </>
  );
}

export default Header;
