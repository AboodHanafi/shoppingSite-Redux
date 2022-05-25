import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="body-content">
        <h1>Contact Page</h1>
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

export default Contact;
