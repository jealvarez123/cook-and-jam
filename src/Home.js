
import React, { Component } from 'react';
import SearchContainer from './SearchContainer'

class Home extends Component {
	render() {
		return (
			<div>
				<h1> Cook Your Way! </h1>
				<SearchContainer query={""}/>
			</div>
		)
	}
}

export default Home;
