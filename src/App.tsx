import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";

import ApolloClient from "./ApolloClient"

import Organization from "./Organization"

import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
        <div className="App">
          <Organization login="rubysherpas" />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
