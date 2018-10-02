import React from "react";
import "./THREADHeader.css";
import Navbar from "./Navbar";

function THREADHeader() {
  return (
    <header className="App-header">
      <div className="container">
      <a href="#home">
        <img
          src="https://raw.githubusercontent.com/dpfernandes/class05-final-project/master/images/thread-logo.png"
          className="logo"
          alt="THREAD Logo"
        />
      </a>
      <Navbar />
      </div>     
    </header>
  );
}

export default THREADHeader;
