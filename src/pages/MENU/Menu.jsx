import React from "react";
import "./MenuStyles.css";
// import allMenuItems from "../../assets/Data/AllMenuItems";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex  d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>
      <MenuItem/>
    </div>
  );
};

export default Menu;
