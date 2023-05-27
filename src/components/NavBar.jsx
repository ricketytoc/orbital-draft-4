import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  function expandMenu() {
    setIsMenuExpanded(!isMenuExpanded);
  }
  console.log(screenWidth);
  return screenWidth > 500 || isMenuExpanded ? (
    <nav className="nav-bar">
      <button onClick={expandMenu} className="nav-menu">
        <MenuIcon />
      </button>
      <ul>
        <li>
          <Link className="nav-links" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="nav-bar">
      <button onClick={expandMenu} className="nav-menu">
        <MenuIcon />
      </button>
    </nav>
  );
}

export default NavBar;
