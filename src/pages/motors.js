import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Motors = () => {
  let navigate = useNavigate();
  const MotorsInfo = useSelector((state) => state.items.motorsData);
  const dispatch = useDispatch();
  const { AddCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div className="body-content">
        <div className="images">
          {MotorsInfo.map((item, index) => {
            return (
              <div key={item.id} id={index}>
                <img src={item.img} alt="Motors"></img>
                <h4>
                  Quanity is : <h3>{item.quantity || "Sold"}</h3>
                </h4>
                <button onClick={() => AddCart(index, item.pathName)}>
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
};

export default Motors;
