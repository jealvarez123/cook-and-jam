import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Kitchen from './components/kitchen';
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
class VideoSearch extends Component {

	render() {
		return (
			<div className='Submit'>
				{/* <form onSubmit={this.props.handleSubmit}>
			 {/* <VideoComp query={user input} />  */}
					 {/* <input type="text"
						value={this.props.query}
						onChange={this.props.handleChange}/>
					<input type="submit" value="Search"	/>
				 </form> */}
				{/* <form onSubmit={this.props.handleSubmit}> */}
						{/* <VideoComp query={user input} /> */}
						{/* <input type="text"
							value={this.props.query}
							onChange={this.props.handleChange}
						/>
						<input type="submit" value="Search"/> */}
					{/* </form> */}
			<TextField
				type="text"
				value={this.props.query}
				onChange={this.props.handleChange}
				hintText="Hint Text"
				floatingLabelText="Search for Cooking Videos"
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
export default VideoSearch;
