import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectCountry from './components/select_country';
import TopHeadlines from './components/top_headlines';
import SearchBar from './components/search_bar';
import NewsListing from './components/news_listing';
import axios from 'axios';
// import NewsListing from './components/news_listing';
const API_KEY = '3bc7644ba19948b99a91aec1e5aaab72';
const Headlines_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			response: '',
			searchResponse: ''
		};
		this.onCountryChange('IN');
		this.newsSearch('bitcoin');
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

	newsSearch(term) {
		// console.log(term);
		if(term === '') {
			return;
		}
		let url = `${Headlines_URL}&q=${term}`;
		let self = this;
		axios.get(url).then(function(response){
			self.setState({
				searchResponse: response
			});
		});
	}

	render() {
		const newsSearch = _.debounce((term) => { this.newsSearch(term) }, 300)
		// console.log(this.state.response);
		return (
			<div>
				<div className="col-xs-12 col-sm-4">
					<div className="selected-country"><SelectCountry onSelectChange={this.onCountryChange.bind(this)} /></div>
					<div className="media headlines-block"><TopHeadlines topHeadlines={this.state.response} /></div>
				</div>	
				<br/>
				<div className="col-xs-12 col-sm-6">
					<div><SearchBar onSearchTermChange={this.newsSearch.bind(this)} /></div>
					<div><NewsListing newsList={this.state.searchResponse} /></div>
				</div>	
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.contained')); 