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

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="mobile-nav-item-container hidden">
          <div className="mobile-nav-details">
            <h2>John Stone</h2>
            <div className="cta-image-container">
              <a
                target="blank"
                className="cta-image"
                href="https://github.com/JStone1"
              >
                <i className={"devicon-github-plain language-icon"}></i>
              </a>
              <a
                target="blank"
                className="cta-image"
                href="https://www.linkedin.com/in/john-stone-50065618b"
              >
                <i className="devicon-linkedin-plain language-icon"></i>
              </a>
            </div>
          </div>
          <NavLink onClick={() => scrollToTop()} to="/">
            <li>About</li>
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="/contact">
            <li>Contact</li>
          </NavLink>
        </div>
        <div className="nav-item-container">
          <NavLink onClick={() => scrollToTop()} to="/">
            <li>About</li>
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="/contact">
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
