import React, { Component } from "react";
import "./App.css";
import Store from "./Store";
import Controls from "./Controls";
import Stack from "./Stack";
import Store from "./Store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Controls />
        <Stack />
      </Provider>
    );
  }
}

export default App;
