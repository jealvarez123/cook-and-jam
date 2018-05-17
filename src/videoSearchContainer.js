import React, { Component } from 'react';
import VideoSearch from './components/videoSearch'
import axios from 'axios';
import YouTube from 'react-youtube';

const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&type=video&videoDefinition=high&q=';

let query = ''

const youtubeKey = '&key=AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY'

class VideoSearchContainer extends Component {
  constructor() {
		super();
		this.state = {
			query: "",
			youtubeVideos: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({
			query: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let response = axios.get(youtubeUrl+ this.state.query + youtubeKey);
	  let self = this;
	  console.log(self);

    response.then(function(response){
      self.setState({
        youtubeVideos: response.data.items[0].id.videoId

      });
    });
  }
  render() {

    // let resultsyt;
		// if (this.state.youtubeVideos.resultsty) {
    //    resultsty = this.state.youtubeVideos.resultsyt.map((item,index) =>
			 <div>
         {/*  */}
			 </div>
		//  )
	 // }

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
  return (
    <div>
      <VideoSearch query={this.state.query}
        handleSubmit={(e) => {this.handleSubmit(e)}}
        handleChange={(e) => {this.handleChange(e)}}/>
        <br />

        <YouTube
               videoId= 'VYOjWnS4cMY'
               opts={opts}
               onReady={this._onReady}
             />
           </div>
         )
       }
     }
     export default VideoSearchContainer;
