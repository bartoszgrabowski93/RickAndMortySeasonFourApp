import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/head.jsx";
import Episodes from "./Episodes.jsx";
import EpisodeDetails from "./EpisodeDetails.jsx";
import CharacterDetails from "./CharacterDetails.jsx";
import Footer from "./components/footer";
import Logo from "./components/logo.jsx";
import BackButton from "./components/backbutton.jsx";
// import "./Styles/CharacterDetailsStyle.css";
// import "./Style.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function BackButtonState() {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <body>
          <header>
            <Head />
          </header>

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Logo />
                    <Episodes />
                  </>
                }
              />
              <Route
                path="/episode/:id"
                element={
                  <>
                    <BackButton />
                    <div className="containercharacterinfo">
                      <Logo />
                      <EpisodeDetails />
                    </div>
                  </>
                }
              />
              <Route
                path="/character/:id"
                element={
                  <>
                    <CharacterDetails />
                  </>
                }
              />
            </Routes>
          </div>
        </body>

        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
