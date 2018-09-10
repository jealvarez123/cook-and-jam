import React, { Component } from 'react';
import './App.css'
import RecipeSearchContainer from './recipeSearchContainer';
import VideoSearchContainer from './videoSearchContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {
	render() {
		return (
			<div className='App'>
				<div className='titleFont'>
					<h1> Cook Your Way! </h1>
				</div>
				<MuiThemeProvider>
					<VideoSearchContainer query={''}/>
					<RecipeSearchContainer query={''}/>
				</MuiThemeProvider>
			</div>
		)
	}
}
export default Home;
