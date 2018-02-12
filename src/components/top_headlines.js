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
								<div key={element.publishedAt}>
									<div className="media-left">
								      <img className="image-text" width={64} height={64} src={element.urlToImage} alt="News &nbsp; &nbsp;" />
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
				{this.newsHeadlines()}
			</div>
		);
	}

}

export default TopHeadlines;