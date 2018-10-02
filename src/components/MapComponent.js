import React from "react";
import "./MapComponent.css"

function MapComponent(props){
  return (
    <div>
      <iframe title="MapComponent" className="mapclass" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.5756101678567!2d12.538978918779287!3d55.66159003753266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652538325fbd4b9%3A0x39ed45f8aba4dc41!2sEnghavevej+80%2C+2450+K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1520375910646" allowfullscreen></iframe>
    </div>
    
  );
}

export default MapComponent;