import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./sideBarData";

const SideBar = () => {
  return (
    <div className="sideBar">
      <h3>types of products </h3>
      <hr />
      <div className="sideBarList">
        {SideBarData.map((item, index) => {
          return (
            <div key={index} className="row">
              <div id="icons">{item.icon}</div>
              <div id="links">
                <Link to={item.path} className="link-style">
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
