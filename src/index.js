import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectCountry from './components/select_country';
import TopHeadlines from './components/top_headlines';
import axios from 'axios';
// import NewsListing from './components/news_listing';
const API_KEY = '3bc7644ba19948b99a91aec1e5aaab72';
const Headlines_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			response: ''
		};
		this.onCountryChange('IN');
	}

	onCountryChange(country) {
		// console.log(country);
		let url = `${Headlines_URL}&country=${country}`;
		// console.log(url);
		let self = this;
		axios.get(url).then(function(response){
			self.setState({
				response: response
			});
		});
	}

	render() {
		// console.log(this.state.response);
		return (
			<div>
				<SelectCountry onSelectChange={this.onCountryChange.bind(this)} />
				<br/>
				<TopHeadlines topHeadlines={this.state.response} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container')); 