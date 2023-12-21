import React from "react";
import "..//Style.css";
import { useParams, useNavigate } from "react-router-dom";

class BackButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* {const navigate = useNavigate();} */}
        <button onClick={() => navigate(-1)} className="backbutton">
          Episodes
        </button>
      </React.Fragment>
    );
  }
}

export default BackButton;
