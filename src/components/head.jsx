import React from "react";
import "..//Style.css";

class Head extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="yellowhead">
          <p className="headertext">lorem ipsum</p>
          <div className="bluehead"></div>
          <div className="bluetriangle"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Head;
