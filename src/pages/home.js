import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="body-content">
      <div className="home-container">
        <div>
          <h3> Trucks </h3>
          <div className="images">
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
          </div>
          <button
            onClick={() => {
              navigate("/trucks");
            }}
          >
            show more
          </button>
        </div>
        <div>
          <h3> Buses </h3>
          <div className="images">
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
          </div>
          <button
            onClick={() => {
              navigate("/buses");
            }}
          >
            show more
          </button>
        </div>
        <div>
          <h3> Vans </h3>
          <div className="images">
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
          </div>
          <button
            onClick={() => {
              navigate("/vans");
            }}
          >
            show more
          </button>
        </div>
        <div>
          <h3> Cars </h3>
          <div className="images">
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
          </div>
          <button
            onClick={() => {
              navigate("/cars");
            }}
          >
            show more
          </button>
        </div>
        <div>
          <h3> Motors </h3>
          <div className="images">
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
            <img src="https://picsum.photos/200" alt="Trucks"></img>
          </div>
          <button
            onClick={() => {
              navigate("/motors");
            }}
          >
            show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
