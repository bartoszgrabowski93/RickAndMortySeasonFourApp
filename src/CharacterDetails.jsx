import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "./gql/Query";
import { useParams, useNavigate } from "react-router-dom";

function CharacterDetails(props) {
  let { id } = useParams();

  let i = 0;
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const char = data.character;
  const listOfDots = [
    { id: 1, data: char.status, dataName: "status" },
    { id: 2, data: char.spicies, dataName: "species" },
    { id: 3, data: char.type, dataName: "type" },
    { id: 4, data: char.gender, dataName: "gender" },
    { id: 5, data: char.origin.name, dataName: "origin" },
    { id: 6, data: char.location.name, dataName: "location" },
  ];

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
      <div className="containercharacterinfo">
        <div className="leftsidewrapper">
          <section id="sectionlogo">
            <h1 className="charactername">{char.name}</h1>
          </section>
          <img
            src={char.image}
            alt="Character Image"
            className="characterimage"
          />
        </div>
        <div id="mainsection" className="characterdetailsinfowrapper">
          <section className="episodeidbracket">
            <div key={char.id}></div>
            {listOfDots.map((l) => (
              <div key={l.id} className="characterdescription">
                <div className="characterdescription">
                  <p className={changeTitleColor("titlecolor", l.id)}>
                    {ifNull(l.data)}
                  </p>
                  <p className="emisiondate">{l.dataName}</p>
                  <div className="horizontalline"></div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default CharacterDetails;
