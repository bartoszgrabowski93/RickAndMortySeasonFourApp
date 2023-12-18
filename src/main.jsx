import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/head.jsx";
import Episodes from "./Episodes.jsx";
import EpisodeDetails from "./EpisodeDetails.jsx";
import CharacterDetails from "./CharacterDetails.jsx";
import Footer from "./components/footer";
import Logo from "./components/logo.jsx";
import "./Style.css";
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
        <header>
          <Head />
        </header>
        <section>
          <Logo />
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/episode/:id" element={<EpisodeDetails />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </section>

        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// { warunek ? <Episodes /> : <Details />}
