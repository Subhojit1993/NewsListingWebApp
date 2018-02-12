import React, { Component } from 'react';

class NewsListing extends Component {

	constructor(props) {
		super(props);
	}

	listNews() {
		console.log(this.props.newsList);
	}

	render() {
		// console.log(this.props.newsList);
		return(
			<div>{this.listNews()}</div>
		);
	}
}

export default NewsListing;