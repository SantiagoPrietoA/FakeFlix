import React from "react";
import Header from "../header/Header.jsx";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  );
};

export default Layout;
