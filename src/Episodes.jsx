import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "./gql/Query";
import "./Style.css";
import Logo from "./components/logo";

function Episodes() {
  const { data, loading, error } = useQuery(GET_EPISODES);

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

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div className="container">
        <div className="logocontainer">
          <Logo />
        </div>
        <div className="mainsection">
          {data.episodes.results.map((episode) => (
            <div>
              <div key={episode.id} className="episodeidcontainer">
                <div>
                  <p className="episodeid">{episode.episode}</p>
                </div>
                <div className="verticallinecontainer">
                  <hr className="verticalline" />
                </div>

                <div className="episodedescription">
                  <Link
                    to={`/episode/${episode.id}`}
                    className={changeTitleColor("titlecolor", episode.id)}
                  >
                    {episode.name}
                  </Link>
                  <p className="emisiondate">{episode.air_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Episodes;
