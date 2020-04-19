import React from "react";
import "./Header.css";
import Search from "../Search/Search.jsx";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <h2 className="logotipo">FAKEFLIX</h2>
        <Search></Search>
      </div>
    </header>
  );
};

export default Header;
