import React, { Component } from "react";
import "./App.css";
import THREADHeader from "./components/THREADHeader";
import MapComponent from "./components/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <THREADHeader />
        <MapComponent />
      </div>
    );
  }
}

export default App;
