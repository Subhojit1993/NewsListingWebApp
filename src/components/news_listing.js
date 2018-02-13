import React, { Component } from 'react';

class NewsListing extends Component {

	constructor(props) {
		super(props);
	}

	listNews() {
		// console.log(this.props.newsList.data);
		let htmlContent = [];
		if(this.props.newsList.data != undefined) {
			this.props.newsList.data.articles.forEach(function(element) {
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
		// console.log(this.props.newsList);
		return(
			<div>
				<br/>
				{this.listNews()}
			</div>
		);
	}
}

export default NewsListing;