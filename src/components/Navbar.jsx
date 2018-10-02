import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="topnav">
      <li>
        <a href="#jobs">Jobs Opportunities</a>
      </li>
      <li>
        <a href="#events">Events</a>
      </li>
      <li>
        <a href="#mentors">Mentors</a>
      </li>
      <li>
        <a href="#organisations">Organisations</a>
      </li>
      <li className="right">
        <a href="#about">About</a>
      </li>
    </ul>
  );
}

export default Navbar;
