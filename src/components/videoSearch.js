import React, { Component } from 'react';

class VideoSearch extends Component {

	render() {
		return (
			<div className='videoSubmit'>
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

export default VideoSearch;
