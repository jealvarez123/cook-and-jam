import React, { Component } from 'react';

class recipeSearch extends Component {

	render() {
		return (
			<div className='recipeForm'>
				<form onSubmit={this.props.handleSubmit}>
					{/* <VideoComp query={user input} /> */}
					<input type="text"
						value={this.props.query}
						onChange={this.props.handleChange}
					/>
					<input type="submit" value="Search"/>
				</form>
			</div>
		)
	}
}
export default recipeSearch;
