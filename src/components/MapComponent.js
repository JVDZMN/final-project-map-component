import React from "react";
import "./MapComponent.css";
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapComponent extends React.Component {
  render() {
    
    const GoogleMapComponent = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 	55.676098, lng: 12.568337 }}
        defaultZoom = { 11 }
      >
        <Marker position={{ lat: 	55.676098, lng: 12.568337 }} />
        <Marker position={{ lat: 	55.696098, lng: 12.578337 }} />
      </GoogleMap>
    ));

    return (
      <div>
      <GoogleMapComponent
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
}

export default MapComponent;
