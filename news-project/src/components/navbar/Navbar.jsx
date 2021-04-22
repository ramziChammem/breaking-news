import React, { useState } from "react";
import { menuItems } from "./MenuItems";
import "./Navbar.css";
function Navbar() {
  // preparing the state to the menu bar display:

  const [clicked, setClicked] = useState(false);

  // now we are going to create the function that changes the display from bars to cross "X" and
  //from cross "X" to bars:

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">
        أخباري <i className="far fa-newspaper"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <li className={clicked ? "fas fa-times" : "fas fa-bars"}></li>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Navbar;
