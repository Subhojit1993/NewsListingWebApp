import React, { Component } from 'react';

class SelectCountry extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.onSelectCountry = this.onSelectCountry.bind(this);
	}

	onSelectCountry(country) {
		this.props.onSelectChange(country);
	}

	render() {
		return(
			<select className="select-bar" onChange={event => this.onSelectCountry(event.target.value)}>
			  <option value="IN">India</option>
			  <option value="SG">Singapore</option>
			  <option value="NZ">New Zealand</option>
			  <option value="AU">Australia</option>
			  <option value="US">United States</option>
			</select>
		);
	}
}

export default SelectCountry;