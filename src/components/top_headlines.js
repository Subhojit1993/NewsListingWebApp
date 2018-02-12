import React, { Component } from 'react';

class TopHeadlines extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.topHeadlines);
		return <div>Top Headlines</div>;
	}

}

export default TopHeadlines;