import { useState } from "react";
import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./gql/QueryCharacters";
import { BrowserRouter, Link } from "react-router-dom";

function Details(props) {
  const episodeId = props;

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
      <>
        <section id="mainsection">
          <div className="episodeidbracket">
            {data.characters.results.map((char) => (
              <div key={char.id}>
                <Link
                  to={"/character/" + char.id}
                  className={changeTitleColor("titlecolor", char.id)}
                >
                  {char.name}
                </Link>
                <p className="emisiondate">{char.spiecies}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    </>
  );
}

export default Details;

{
  /* <p className="episodeid">S04E{episodeNumber(episode.id)}</p>
              <div className="episodedescription">
                <a href={open.Details + episode.id} className={changeTitleColor('titlecolor',episode.id)}>
                  {episode.name}
                </a>
                <p className="emisiondate">{episode.air_date}</p>
              </div> */
}
