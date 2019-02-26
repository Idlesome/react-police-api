import React, { Component } from 'react';
import MapContainer from './containers/MapContainer.js'
import MapControls from './MapControls.js'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crimes: [],
      year: "2018",
      month: "01",
      activeCrimeCategory: "all-crime",
      crimeCategories: [],
      error: null
    }
  }

  componentDidMount() {
    axios.get("https://data.police.uk/api/crimes-street/all-crime?lat=51.400459&lng=-1.321850&date="+this.state.year+"-"+this.state.month)
      .then(result => {
        this.setState({
          crimes: result.data,
        });
        //console.log(result.data);
      })
      .catch(error => this.setState({error}));

    axios.get("https://data.police.uk/api/crime-categories?date="+this.state.year+"-"+this.state.month)
      .then(result => {
        this.setState({
          crimeCategories: result.data.map(category => {
            return {key: category.name, text: category.name, value: category.url}
          }),
        });
        //console.log(result.data);
      })
      .catch(error => this.setState({error}));
  }

  setActiveCrimeCategory = (activeCrimeCategory) => {
    this.setState({activeCrimeCategory});

  }

  render() {
    if(this.state.error){
      return (
        <div>{this.state.error}</div>
        );
    }

    return (
      <>
        <MapContainer
          crimes={this.state.crimes}
          activeCrimeCategory={this.state.activeCrimeCategory}
        />
        <MapControls
          activeCrimeCategory={this.state.activeCrimeCategory}
          setCategory={this.setActiveCrimeCategory}
          crimeCategories={this.state.crimeCategories}
        />
      </>
    );
  }
}

export default App;


