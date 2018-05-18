import React, { Component } from 'react';
import RecipeSearch from './recipeSearch';
import axios from 'axios';
import keys from './keys'

const spoonUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=';

const mashapeKey = keys.REACT_APP_MASHAPE;
const spoonByIdUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' ;
const endOfSpoonByIdUrl = '/analyzedInstructions?stepBreakdown=true';

class RecipeSearchContainer extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			foodData: {}
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
		let thisContainer = this;
		// Getting the recipe itself
		axios.get(spoonUrl+ this.state.query + "&limit=10",
			{
				headers: {
					'X-Mashape-Key': mashapeKey,
					'Accept': 'application/json'
				}
			}
	 	).then(function(recipeDataWithId){
				console.log(recipeDataWithId.data.results[0]);
				thisContainer.setState({
					foodData:{
						title: recipeDataWithId.data.results[0].title,
						image: recipeDataWithId.data.results[0].image
					}
				})

			// Getting the recipe steps
			let recipeId = recipeDataWithId.data.results[0].id
			axios.get(spoonByIdUrl + recipeId + endOfSpoonByIdUrl,
				{
					headers: {
						'X-Mashape-Key': mashapeKey,
						'Accept': 'application/json'
					}
				}
		).then((res) => {

			console.log(res.data);
				let foodData = this.state.foodData;
				foodData.steps = res.data[0].steps
			this.setState({
				foodData: foodData
				})
			});
	}


	render() {
		let steps = this.state.foodData.steps.map( => {


		})
		return (
			<div>
				<RecipeSearch query={this.state.query}
					handleSubmit={(e) => {this.handleSubmit(e)}}
					handleChange={(e) => {this.handleChange(e)}}/>
					<br />
					<div>
						<h2>{item.title}</h2>
						<img src={this.state.foodData.baseUri + item.image}/>
					</div>
				</div>
			)
		}
	}
	export default RecipeSearchContainer;
