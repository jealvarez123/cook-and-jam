import React, { Component } from 'react';

class Search extends Component {

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				{/* <VideoComp query={user input} /> */}
				<input type="text"
					value={this.props.query}
					onChange={this.props.handleChange}
				/>
	            <input type="submit" value="Search"/>
			</form>
		)
	}
}

export default Search;
