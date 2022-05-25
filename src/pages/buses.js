import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../state/actionCreator";

const Buses = () => {
  let navigate = useNavigate();
  const BusesInfo = useSelector((state) => state.items.busesData);
  const test = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(test);

  return (
    <>
      <div className="body-content">
        <div className="images">
          {BusesInfo.map((item, index) => {
            return (
              <div key={item.id} id={index}>
                <img src={item.img} alt="Buses"></img>
                <h4>
                  Quanity is : <h3>{item.quantity || "Sold"}</h3>
                </h4>
                <button onClick={() => dispatch(AddCart(index, item.pathName))}>
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

export default Buses;
