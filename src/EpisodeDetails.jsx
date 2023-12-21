import { useState } from "react";
import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/Query";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "./components/logo";

function Details() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  function changeTitleColor(className, idNumber) {
    let result = idNumber % 2;
    const elementToChange = document.getElementsByClassName(className);
    if (result != 0) {
      const titleColorBlue = "titlecolorblue";
      return titleColorBlue;
    } else {
      return className;
    }
  }

  return (
    <>
      <div className="container">
        <div className="leftsidewrapper">
          <Logo />
        </div>
        <div className="containercharacterinfo">
          <div className="mainsection">
            <section className="episodeidbracket">
              {data.characters.results.map((char) => (
                <div key={char.id} className="characterinfowrapper">
                  <Link
                    to={`/character/${char.id}`}
                    className={changeTitleColor("titlecolor", char.id)}
                  >
                    {char.name}
                  </Link>
                  <p className="emisiondate">{char.species}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
