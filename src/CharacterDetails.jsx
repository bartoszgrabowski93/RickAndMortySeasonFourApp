import "./Style.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "./gql/Query";
import { useParams } from "react-router-dom";

const Details = (props) => {
  function GetId() {
    const { id } = useParams();
    console.log(id);
  }

  let { id } = useParams();
  const idNumber = console.log(typeof id);

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

  return (
    <>
      <>
        <section id="mainsection">
          <div className="episodeidbracket">
            <div key={data.character.id}>
              <p>{char.name}</p>
              <p>{char.status}</p>
              <p>{char.spicies}</p>
              <img src={char.image} alt="Character Picture" className="logo" />
              <p>{char.type}</p>
              <p>{char.gender}</p>
              <p>{char.origin.name}</p>
              <p>{char.location.name}</p>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Details;
