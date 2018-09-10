import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  	button: {
    margin: 12,},
  	exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
class recipeSearch extends Component {

	render() {
		return (
			<div className='Submit'>
			{/* // 	<form onSubmit={this.props.handleSubmit}>
			//
			// 		 <input type="text" */}
			{/* // 			value={this.props.query}
			// 			onChange={this.props.handleChange}
			// 		/>
			// 		<input type="submit" value="Search"/>
			// 	</form> */}

			<TextField
				type="text"
				value={this.props.query}
				onChange={this.props.handleChange}
				hintText="Hint Text"
				floatingLabelText="Search for Recipes"
			/><br />
			<RaisedButton
	 		 onClick={this.props.handleSubmit}
	 		 type="submit"
	 		 label="Let's Cook"
	 		 labelPosition="before"
	 		 primary={true}
	 		 // icon={<Kitchen />}
	 		 style={styles.button}
	 		/>
		</div>
	)
}
}
export default recipeSearch;
