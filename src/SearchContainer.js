import React, { Component } from 'react';
import Search from './Search'
import axios from 'axios';


const spoonUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=';

const mashapeKey = '56OOXfxZXcmsh4XJelNuVBN7T1NBp1BWuWqjsnjYgQx5Biq42x';


class SearchContainer extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			foodData: []
		}

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
		let response = axios.get(spoonUrl+ this.state.query + "&limit=10", {headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}});
	  let self = this;
	  console.log(self);

		response.then(function(response){

			self.setState({
				foodData: response.data
			});
		});
	}

	render() {
		let results;
		if (this.state.foodData.results) {
       results = this.state.foodData.results.map((item,index) =>
			 <div>
				 <h2>{item.title}</h2>
				 <img src={this.state.foodData.baseUri + item.image}/>
			 </div>

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
