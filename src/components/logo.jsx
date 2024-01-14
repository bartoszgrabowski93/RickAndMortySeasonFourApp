import React from "react";
import logo from "../image/logo.png";

//const logo = requaire('../image/logo.png')

class Logo extends React.Component {
  render() {
    return (
      <>
        <div className="logoandtitlecontainer">
          <div id="sectionlogo">
            <div className="logotext">
              <h1>
                Episode of the <b>4th</b>
              </h1>
            </div>
            <div className="logotext">
              <h1>season of the series</h1>
            </div>
            <div className="logotext">
              <h1 className="blue">Rick and Morty</h1>
            </div>
          </div>
          <img src={logo} alt="RickAndMortyLogo" className="logo" />
        </div>
      </>
    );
  }
}

export default Logo;
