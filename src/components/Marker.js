import React from "react";
import { Marker as MapMarker, InfoWindow } from "react-google-maps";
import CrimeCard from "./CrimeCard";

export default class Marker extends React.Component {

  state = {
    isOpen: false,
    activeMarker: this.props.activeMarker
  }

  toggleOpen = () => {
    this.setState({isOpen: !this.state.isOpen}, () =>{
        if (!this.state.isOpen){
          this.setState({activeMarker: false}, () => {
            this.props.closeMarkers(null)
          })
        } else{
          this.props.closeMarkers(this.props.pid)
        }
      }
    )
  }

  componentWillReceiveProps(nextProps){
    this.setState({activeMarker: nextProps.activeMarker})
  }

  render(){
  	if(!this.props.showMarker) {
  		return null;
  	}

    return(
    	<>
	        <MapMarker
	        	onClick={this.toggleOpen}
	          position={this.props.location}
	        >
	        </MapMarker>
	        { this.state.isOpen && this.state.activeMarker ?
	          <InfoWindow maxWidth={800} defaultPosition={ this.props.location } onCloseClick={this.props.onToggleOpen}>
	            <CrimeCard toggleShowPage={this.props.toggleShowPage} crime={this.props.crime}/>
	          </InfoWindow> : null
	        }
        </>
    );
  }
}