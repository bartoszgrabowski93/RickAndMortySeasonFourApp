import React from "react";
import "../Style.css";
import BackImage from "../Images/Refund_back.png";
import {
  useParams,
  useNavigate,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const episodesNumber = "%%";
  function previousPageName() {
    if (window.location.pathname == `/episode/${episodesNumber}`) {
      return "Episodes";
    } else {
      return "Characters";
    }
  }

  if (window.location.pathname == "/") {
    return <div></div>;
  } else {
    return (
      <React.Fragment>
        <button onClick={() => navigate(-1)} className="backbutton">
          <img src={BackImage} alt="" sizes="" srcset="" />
          {(previousPageName = previousPageName())}
        </button>
      </React.Fragment>
    );
  }
}

//   switch (window.location.pathname) {
//     case "/":
//       return <div></div>;
//       break;

//     case `/episode/:id`:
//       return (
//         <React.Fragment>
//           <button onClick={() => navigate(-1)} className="backbutton">
//             <img src={BackImage} alt="" sizes="" srcset="" />
//             Episodes
//           </button>
//         </React.Fragment>
//       );
//       break;

//     case `/character/:id`:
//       return (
//         <React.Fragment>
//           <button onClick={() => navigate(-1)} className="backbutton">
//             <img src={BackImage} alt="" sizes="" srcset="" />
//             Characters
//           </button>
//         </React.Fragment>
//       );
//       break;
//   }
// }

export default BackButton;
