import React, { Component } from "react";
import "..//Style.css";
import BackImage from "../image/Refund_back.png";
import { useParams, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  if (window.location.pathname == "/") {
    return <div></div>;
  } else {
    return (
      <React.Fragment>
        <button onClick={() => navigate(-1)} className="backbutton">
          <img src={BackImage} alt="" sizes="" srcset="" />
          Back
        </button>
      </React.Fragment>
    );
  }
}

export default BackButton;
