import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class recipeSearch extends Component {

	render() {
		return (
			<div className='recipeForm'>
				{/* <form onSubmit={this.props.handleSubmit}> */}
					{/* <VideoComp query={user input} /> */}
					{/* <input type="text"
						value={this.props.query}
						onChange={this.props.handleChange}
					/>
					<input type="submit" value="Search"/> */}
				{/* </form> */}
				{/* <TextField
		 hintText="Hint Text"
	 /><br />
	 <br /> */}
	 {/* <TextField
		 hintText="The hint text can be as long as you want, it will wrap."
	 /><br /> */}
	 {/* <TextField
		 id="text-field-default"
		 defaultValue="Default Value"
	 /><br /> */}
	 <TextField
		 hintText="Hint Text"
		 floatingLabelText="Search for Recipes"
	 /><br />
	 {/* <TextField
		 defaultValue="Default Value"
		 floatingLabelText="Floating Label Text"
	 /><br />
	 <TextField
		 hintText="Hint Text"
		 floatingLabelText="Fixed Floating Label Text"
		 floatingLabelFixed={true}
	 /><br />
	 <TextField
		 hintText="Password Field"
		 floatingLabelText="Password"
		 type="password"
	 /><br />
	 <TextField
		 hintText="MultiLine with rows: 2 and rowsMax: 4"
		 multiLine={true}
		 rows={2}
		 rowsMax={4}
	 /><br />
	 <TextField
		 hintText="Message Field"
		 floatingLabelText="MultiLine and FloatingLabel"
		 multiLine={true}
		 rows={2}
	 /><br /> */}
	 {/* <TextField
		 hintText="Full width"
		 fullWidth={true}
	 /> */}
			</div>
		)
	}
}
export default recipeSearch;
