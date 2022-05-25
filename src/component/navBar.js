import React from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "./navBarData";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartCounter = useSelector((state) => state.items.cartCounter);
  return (
    <div className="navBar">
      <div className="text">Best Vehicle With Us</div>
      <div className="navBar-list">
        {NavBarData.map((item, index) => {
          return (
            <div key={index} id="row">
              <div id="icon">{item.icon}</div>
              <div id="link">
                <Link to={item.path} className="link-style">
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
        <div className="cart-item">
          <span>{cartCounter}</span>
          <ShoppingCartIcon />
          <div>
            <Link to="/cart" className="link-style">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
