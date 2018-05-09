
import React, { Component } from 'react';

const API = 'AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY'


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}`

class Search extends Component {
  render() {
    console.log(finalURL);
    return (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VYOjWnS4cMY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

		)
	}
}


export default Search;
