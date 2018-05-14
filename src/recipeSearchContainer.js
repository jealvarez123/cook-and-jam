import React, { Component } from 'react';
import RecipeSearch from './recipeSearch'
import axios from 'axios';


const spoonUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=';

const mashapeKey = '56OOXfxZXcmsh4XJelNuVBN7T1NBp1BWuWqjsnjYgQx5Biq42x';
const spoonByIdUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' ;
const endOfSpoonByIdUrl = '/analyzedInstructions?stepBreakdown=true';





class RecipeSearchContainer extends Component {
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
		axios.get(spoonUrl+ this.state.query + "&limit=10",
		 {headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}}
	 	).then(function(recipeDataWithId){
			let recipeId = recipeDataWithId.data.results[0].id
			axios.get(spoonByIdUrl + recipeId + endOfSpoonByIdUrl,
			{headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}}
		).then((res) => {
			console.log(res.data);

			// self.setState({
			// 	foodData: res.data[0]
				})
			});
	}
	render() {
		let results;
		if (this.state.foodData.results) {
       results = this.state.foodData.results.map((item,index) =>
			 <div>
				 <h2>{item.id}</h2>
				 <img src={this.state.foodData.baseUri + item.image}/>
			 </div>
		 )
	 }
	 return (
		 <div>
			 <RecipeSearch query={this.state.query}
				 handleSubmit={(e) => {this.handleSubmit(e)}}
				 handleChange={(e) => {this.handleChange(e)}}/>
				 <br />
				 <div>{ results }</div>
			 </div>
		 )
	 }
 }
 export default RecipeSearchContainer;
