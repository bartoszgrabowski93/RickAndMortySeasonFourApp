import React from "react";
import "..//Style.css";
import { useParams, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  if (window.location.pathname == "/") {
    return <div></div>;
  } else {
    return (
      <React.Fragment>
        <button onClick={() => navigate(-1)} className="backbutton">
          Back
        </button>
      </React.Fragment>
    );
  }
}

export default BackButton;
