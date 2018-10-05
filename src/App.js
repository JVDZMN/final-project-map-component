import React, { Component } from "react";
import "./App.css";
import THREADHeader from "./components/THREADHeader";
import MapComponent from "./components/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <THREADHeader />
        <p className="App-intro">
          THREAD is a dynamic and innovative collaboration of diverse partners
          from business, design, education, research and refugee support
          agencies aiming to achieve life-changing results for women who are
          forging new lives in Denmark.
        </p>
        
        <MapComponent isMarkerShown />
      </div>
    );
  }
}

export default App;
