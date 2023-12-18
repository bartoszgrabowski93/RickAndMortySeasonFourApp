import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "./gql/Query";
import { useParams } from "react-router-dom";

const Details = (props) => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

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

  const char = data.character;
  let i = 0;

  const listOfDots = [
    { id: 1, data: char.name, dataName: "name" },
    { id: 2, data: char.spicies, dataName: "species" },
    { id: 3, data: char.type, dataName: "type" },
    { id: 4, data: char.gender, dataName: "gender" },
    { id: 5, data: char.origin.name, dataName: "origin" },
    { id: 6, data: char.location.name, dataName: "location" },
  ];

  function ifNull(value) {
    if (value == NaN || value == null || value == 0) {
      const nullValue = "-";
      return nullValue;
    } else {
      return value;
    }
  }

  return (
    <>
      <div className="leftsidewrapper">
        <section id="sectionlogo">
          <h1 className="blue">{char.name}</h1>
        </section>
        <img src={char.image} alt="Character Image" className="logo" />
      </div>
      <section id="mainsection">
        <div className="episodeidbracket">
          <div key={char.id}></div>
          {listOfDots.map((l) => (
            <div key={l.id}>
              <div className="episodedescription">
                <p className={changeTitleColor("titlecolor", l.id)}>
                  {ifNull(l.data)}
                </p>
                <p className="emisiondate">{l.dataName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Details;
