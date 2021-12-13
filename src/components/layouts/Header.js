import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={"desktop-header fixed-top"}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <Link
              className='m-auto nav-link'
              style={{ color: '#FFF', textDecoration: 'none' }}
              activeClass="active"
              to="section-home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h2 style={{ color: '#FFF' }}>
                Maxwell Walin
              </h2>
            </Link>
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-works"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="section-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
