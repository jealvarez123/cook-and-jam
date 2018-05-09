import React, { Component } from 'react';
import Search from './search'
import axios from 'axios';

//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high&key={YOUR_API_KEY}

class SearchContainer extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			response: []
		}
		this.API_KEY = "AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY";
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({
			query: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const rootUrl = "https://www.googleapis.com/youtube/v3/search?key="
		let response = axios.get(rootUrl+ this.state.query + "&api_key=" + this.API_KEY + "&limit=10");
		let self = this;

		response.then(function(data){
			self.setState({
				response: data.data.data
			});
		});
	}

	render() {
		let results;
		if (this.state.response) {
      results = this.state.response.map((item,index) =>
			  <img key={index} src={item.images.fixed_height_small.url} alt="results" />
			)
    }

		return (
			<div>

				<Search query={this.state.query}
						handleSubmit={(e) => {this.handleSubmit(e)}}
						handleChange={(e) => {this.handleChange(e)}}/>
				<br />
				<div>{ results }</div>
			</div>
		)
	}
}

export default SearchContainer;
