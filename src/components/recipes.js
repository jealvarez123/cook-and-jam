import React from 'react';

import axios from 'axios';


 const spoonUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query='


const mashapeKey = '56OOXfxZXcmsh4XJelNuVBN7T1NBp1BWuWqjsnjYgQx5Biq42x'

export default class Recipes extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      recipes: []
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


  // componentDidMount() {
  //     axios.get(spoonUrl, {headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}})
  //       .then(res => {
  //     console.log(res.data);
  //       })
  //   }

  handleChange(e) {
  		this.setState({
  			query: e.target.value,
  		});
  	}

    handleSubmit(e) {
  e.preventDefault();

  let response = axios.get(spoonUrl+ this.state.query + "&limit=10", {headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}});
  let self = this;
  console.log(self);

  response.then(function(data){
    self.setState({
      response: data
    });
  });
}
  render() {
    let results;
    		if (this.state.response) {
          results = this.state.response.map(results)
    			 console.log(results);

        }

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
  				<input type="text"
  					value={this.props.query}
  					onChange={this.props.handleChange}
  				/>
  	            <input type="submit" value="Search"/>
  			</form>
        <div>{results}</div>

      </div>
    )
  }
}
