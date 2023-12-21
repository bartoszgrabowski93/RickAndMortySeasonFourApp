import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "./components/head.jsx";
import Episodes from "./Episodes.jsx";
import EpisodeDetails from "./EpisodeDetails.jsx";
import CharacterDetails from "./CharacterDetails.jsx";
import Footer from "./components/footer";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <header>
          <Head />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/episode/:id" element={<EpisodeDetails />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
