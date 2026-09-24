import React from "react";
import { Link } from "react-router-dom";

const MenuBtn = ({ text = "Our Full Menu", to = "/menu" }) => {
  return (
    <Link to={to} className="btn btn-success btn-lg px-4">
      {text}
    </Link>
  );
};

export default MenuBtn;
