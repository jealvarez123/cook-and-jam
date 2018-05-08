import React, { Component } from 'react';
import './App.css';
import Search from './components/search'
import Video from './components/video'
import Recipes from './components/recipes'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Video />
        <Recipes />
      </div>
    );
  }
}

export default Home;
