import React, { Component } from 'react';
import Search from './search'
import axios from 'axios';


class SearchContainer extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			response: []
		}
    
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({
			query: e.target.value,
		});
	}

  //GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high&key={YOUR_API_KEY}
	handleSubmit(e) {
		e.preventDefault();
		const rootUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high&key="
		let response = axios.get(rootUrl + this.API_KEY );
		let self = this;

		response.then(function(data){
			self.setState({
				response: data
			});
		});
	}

	render() {
		let results;

		return (
			<div>

				<Search query={this.state.query}
						handleSubmit={(e) => {this.handleSubmit(e)}}
						handleChange={(e) => {this.handleChange(e)}}/>
				<br />
				<div><iframe title="title" width="560" height="315" src={results} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
</div>
			</div>
		)
	}
}

export default SearchContainer;
