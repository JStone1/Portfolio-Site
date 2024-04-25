import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  let body = document.querySelector("body");

  function handleMobileNav() {
    let mobileNavMenu = document.querySelector(".mobile-nav-item-container");
    let hamburger = document.querySelector(".hamburger-container");

    if (!mobileNav) {
      mobileNavMenu?.classList.remove("hidden");
      hamburger?.classList.add("fixed");
      body?.classList.add("fixed-body");
    } else {
      mobileNavMenu?.classList.add("hidden");
      hamburger?.classList.remove("fixed");
      body?.classList.remove("fixed-body");
      setMobileNav(false);
    }
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
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/projects"
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/contact"
          >
            <li>Contact</li>
          </NavLink>
        </div>
        <div className="nav-item-container">
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/projects"
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToTop(), handleMobileNav();
            }}
            to="/contact"
          >
            <li>Contact</li>
          </NavLink>
        </div>
        <div onClick={handleMobileNav} className={"hamburger-container"}>
          <Hamburger
            toggled={mobileNav}
            toggle={setMobileNav}
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
