import React from "react";
import { Dropdown } from 'semantic-ui-react'

export default class MapContainer extends React.Component {

	state = {
		activeCrimeCategory: this.props.activeCrimeCategory
	}

	onChange = (e, { value }) => {
		this.props.setCategory(value);
		//this.setState({ activeCrimeCategory: this.props.activeCrimeCategory });
	}

	componentWillReceiveProps(nextProps){
	    this.setState({activeCrimeCategory: nextProps.activeCrimeCategory})
	  }

	render() {
		return (
			<div style={{width: `50%`, float: `left`}}>
				<Dropdown
					placeholder='Filter by crime category'
					fluid
					selection
					options={this.props.crimeCategories}
					loading={this.props.crimeCategories.length === 0}
					onChange={this.onChange}
					value={this.state.activeCrimeCategory}
				>
				</Dropdown>
			</div>
			);
		}
}