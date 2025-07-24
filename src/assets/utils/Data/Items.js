// @ts-nocheck
import React, { useContext } from "react";
import "./ShopCategoryStyles.css";
import { ShopContext } from "../../services/CONTEXT/ShopContext";

import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../../features/ITEM/Item";

const ShopCategory = ({ banner, category }) => {
  // console.log(banner)

  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="imageBanner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item) => {
          if (category === item.category) {
            return <Item key={item.id} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
