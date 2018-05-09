import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import Video from './components/video'
import Videos from './components/videos'
import SearchContainer from './components/searchContainer'
import Recipes from './components/recipes'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Video />
        <Videos />
        <SearchContainer />
        <Recipes />

      </div>
    );
  }
}

export default Home;
