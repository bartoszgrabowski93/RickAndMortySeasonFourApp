import React from 'react'
import ReactDOM from 'react-dom/client'
import Head from './components/head.jsx'
import Episodes from './Episodes.jsx'
import Footer from './components/footer'
import Logo from './components/logo.jsx'
import './Style.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Head />
      <Episodes />
      <Logo />
      <Footer />
    </ApolloProvider>
  </React.StrictMode>
)
