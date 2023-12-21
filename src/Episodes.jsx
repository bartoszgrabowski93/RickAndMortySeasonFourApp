import { useEffect, useState } from "react";
import Details from "./EpisodeDetails";
import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "./gql/Query";
import { BrowserRouter, Link } from "react-router-dom";

function Episodes() {
  // const [episodes, setEpisodes] = useState(0);
  const { data, loading, error } = useQuery(GET_EPISODES);

  function episodeNumber(epNumber) {
    if (epNumber < 10) {
      const numberString = epNumber.toString().padStart(2, "0");
      return numberString;
    } else {
      return epNumber;
    }
  }

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

  function episodeDetails(episodeId) {
    console.log({ episodeId });
  }

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div id="mainsection" className="episodescontainer">
        <div>
          {data.episodes.results.map((episode) => (
            <div>
              <div key={episode.id} className="episodeidcontainer">
                <div>
                  <p className="episodeid">{episode.episode}</p>
                </div>
                <hr className="verticalline" />
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
