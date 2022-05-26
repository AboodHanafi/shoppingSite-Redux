import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { CounterPlus, CounterMinus, DeleteItem } from "../state/actionCreator";
const Cart = () => {
  let navigate = useNavigate();
  const cartData = useSelector((state) => state.items.cartData);
  const dispatch = useDispatch();
  let bool = false;

  // let total = cartData.reduce(function (prev, current) {
  //   console.log(prev);
  //   return prev + +current.total;
  // }, 0);
  if (cartData[1]) {
    bool = true;
  }
  return (
    <>
      <div className="body-content">
        <div className="cart">
          <ul>
            {cartData.slice(1).map((item, index) => {
              return (
                <li id="row" key={index}>
                  <div className="item-cartPage">{item.name}</div>
                  <div className="item-cartPage">
                    <img className="image" src={item.img} alt="#" />
                  </div>
                  <div className="item-cartPage">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() =>
                        dispatch(
                          CounterMinus(index + 1, item.pathName, item.index)
                        )
                      }
                    >
                      -
                    </button>
                    <h4>{item.quantity}</h4>
                    <button
                      onClick={() =>
                        dispatch(
                          CounterPlus(index + 1, item.pathName, item.index)
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="item-cartPage">price : {item.price}$</div>
                  <div className="item-cartPage">
                    total price : {item.total}$
                  </div>
                  <button
                    className="item-cartPage"
                    onClick={() =>
                      dispatch(
                        DeleteItem(
                          item.id,
                          item.quantity,
                          item.index,
                          item.pathName
                        )
                      )
                    }
                  >
                    <DeleteOutlineIcon />
                  </button>
                </li>
              );
            })}
          </ul>
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

export default Cart;
