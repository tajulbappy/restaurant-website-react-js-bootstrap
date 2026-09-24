// @ts-nocheck
import React from "react";
import PageHeader from "../../components/PageHeader";
import MenuItem from "./MenuItem";
import MenuBg from "../../assets/images/menu-img.jpg";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <PageHeader title="Menu" background={MenuBg} />
      <MenuItem />
    </div>
  );
};

export default Menu;
