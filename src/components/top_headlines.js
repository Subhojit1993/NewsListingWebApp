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
				// console.log(element);
				htmlContent.push(
								<div key={element.publishedAt} className="headlines-margin">
									<div className="media-left">
								      <a href={element.url} className="image-link"><img className="image-text" width={64} height={64} src={element.urlToImage} alt="News &nbsp; &nbsp;" /></a>
								    </div>
									<div className="media-body">
										<a href={element.url}>{element.title}</a>
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
			<div>
				<br/>
				<h4 className="top-headlines-text">Headlines Today</h4>
				<br/>
				{this.newsHeadlines()}
			</div>
		);
	}

}

export default TopHeadlines;