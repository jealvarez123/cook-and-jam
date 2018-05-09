import React from 'react';

import axios from 'axios';

let url = API.uri + '/recipes/search?cuisine=Asian&intolerances=corn&limitLicense=false&number=10&offset=0&query=' + query,
     request = new Request(url, {
       headers: new Headers({
         'X-Mashape-Key': 56OOXfxZXcmsh4XJelNuVBN7T1NBp1BWuWqjsnjYgQx5Biq42x
         //'Accept': 'application/json'
       })
     });

export default class Recipes extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(request)
      .then(res => {
      console.log(res.data);
      });
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
