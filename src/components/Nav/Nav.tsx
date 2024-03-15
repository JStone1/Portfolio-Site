import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function Nav() {
  const [hamburgerOpen, setHamburgOpen] = useState(false);

  function toggleHamburger() {
    let mobileNav = document.querySelector(".mobile-nav-item-container");
    let hamburger = document.querySelector(".hamburger-container");

    mobileNav?.classList.toggle("hidden");
    hamburger?.classList.toggle("fixed");
  }

  return (
    <>
      <nav>
        <div className="mobile-nav-item-container hidden">
          <p>STYLE ME</p>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </div>
        <div className="nav-item-container">
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </div>
        <div onClick={toggleHamburger} className={"hamburger-container"}>
          <Hamburger
            toggled={hamburgerOpen}
            toggle={setHamburgOpen}
            size={24}
            duration={0.8}
            label="Show menu"
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
