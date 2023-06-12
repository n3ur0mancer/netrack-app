import React from "react";
import "@fontsource/hanken-grotesk";

import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-main-flex-container">
        <h2 className="header-title">Netrack</h2>
        <ul className="header-list-flex-container">
          <li>App</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
