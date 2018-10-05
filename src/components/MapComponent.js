import React from "react";
import "./MapComponent.css";
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapComponent extends React.Component {
  render() {
    
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 	55.676098, lng: 12.568337 }}
        defaultZoom = { 11 }
      >
      </GoogleMap>
    ));

    return (
      <div>
      <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
}

export default MapComponent;
