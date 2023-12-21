import React from "react";
import logo from "../image/logo.png";

//const logo = requaire('../image/logo.png')

class Logo extends React.Component {
  render() {
    return (
      <>
        <div>
          <section id="sectionlogo">
            <h1>
              Episode of the <b>4th</b>
            </h1>
            <h1>season of the series</h1>
            <h1 className="blue">Rick and Morty</h1>
          </section>
          <img src={logo} alt="RickAndMortyLogo" className="logo" />
        </div>
      </>
    );
  }
}

export default Logo;
