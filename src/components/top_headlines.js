import React, { Component } from 'react';

class TopHeadlines extends Component {

	constructor(props) {
		super(props);
	}

	newsHeadlines() {
		let htmlContent = [];
		// console.log(this.props.topHeadlines.data);
		if(this.props.topHeadlines.data != undefined) {
			// console.log(this.props.topHeadlines.data.articles);
			this.props.topHeadlines.data.articles.forEach(function(element) {
				console.log(element);
				htmlContent.push(
								<div>
									<div className="media-left">
								      <img width={64} height={64} src={element.urlToImage} alt="thumbnail" />
								    </div>
									<div className="media-body">
										<a href={element.url} key={element.publishedAt}>{element.title}</a>
									</div>
									<br/>
								</div>
								);
			})
		}

		return htmlContent;
	}

	render() {
		// console.log(this.props.topHeadlines);
		return (
			<div className="col-xs-12 col-sm-4 media">
				{this.newsHeadlines()}
			</div>
		);
	}

}

export default TopHeadlines;