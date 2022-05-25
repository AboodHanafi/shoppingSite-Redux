import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="body-content">
        <h1>About Page</h1>
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

export default About;
