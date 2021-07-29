import React, { useState } from "react";
import { Button } from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Nabar.css";
import { Link } from "react-scroll";
import useScrollYOffset from "./scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };
  const yOffset = useScrollYOffset();
  const navClass = yOffset > 100 ? "navbar scrolled" : "navbar";

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navClass}>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <i class="fas fa-archway"></i>
              ShowHouse
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="lead"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  duration={1000}
                  offset={-70}
                  smooth="true"
                >
                  <i class="fas fa-home"></i>
                  Bosh sahifa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  duration={1000}
                  offset={-70}
                  smooth="true"
                >
                  <i class="fas fa-briefcase"></i> Xizmat va narxlar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="clients"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  duration={1000}
                  offset={-70}
                  smooth="true"
                >
                  <i class="fas fa-users"></i>
                  Mijozlar
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="auth"
                    className="btn-link"
                    onClick={closeMobileMenu}
                    duration={1000}
                    offset={-70}
                    smooth="true"
                  >
                    <Button buttonStyle="btn--outline">Izoh</Button>
                  </Link>
                ) : (
                  <Link
                    to="auth"
                    className="btn-link"
                    onClick={closeMobileMenu}
                    duration={1000}
                    offset={-70}
                    smooth="true"
                  >
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Izoh
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
