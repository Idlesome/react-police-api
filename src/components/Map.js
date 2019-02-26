import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker from "./Marker";

const Map = withScriptjs(withGoogleMap((props) =>{

  const markers = props.crimes.map( crime => {
      return (<Marker
        showMarker={props.activeCrimeCategory === "all-crime" || crime.category === props.activeCrimeCategory}
        key={crime.persistent_id}
        pid={crime.persistent_id}
        closeMarkers={props.closeOtherMarkers}
        toggleShowPage={props.toggleShowPage}
        location={{ lat: parseFloat(crime.location.latitude), lng: parseFloat(crime.location.longitude)  }}
        crime={crime}
        activeMarker={crime.persistent_id === props.activeMarker ? true : false}
      />);
  });
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  51.400459, lng: -1.321850 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default Map;







