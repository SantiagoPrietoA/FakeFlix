import React from "react";
import "./Search.css";

const Search = () => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
    }
  };

  return (
    <form action="">
      <input type="search" onKeyDown={handleKeyDown} />
      <i className="fa fa-search"></i>
    </form>
  );
};

export default Search;
