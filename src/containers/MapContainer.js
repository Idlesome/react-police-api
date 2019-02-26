import React from "react";
import Map from "../components/Map";

export default class MapContainer extends React.Component {

	state = {
		activeMarker: null
	}

	closeOtherMarkers = (uid) => {
		this.setState({activeMarker: uid})
	}

	render() {
		return (
			<Map
				crimes={this.props.crimes}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA-jbFCGQf6y9kL6s9wLkr3gVCRYV6hJjw&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `50%`, float: `left` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				activeMarker={this.state.activeMarker}
				closeOtherMarkers={this.closeOtherMarkers}
				activeCrimeCategory={this.props.activeCrimeCategory}
			/>
		);
	}
}