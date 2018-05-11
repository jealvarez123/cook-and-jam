
import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import VideoContainer from './videoContainer';

let search = ''

class Home extends Component {
	render() {
		return (
			<div>
				<h1> Cook Your Way! </h1>

				<VideoContainer query={''}/>
				<SearchContainer query={''}/>
			</div>
		)
	}
}

export default Home;
