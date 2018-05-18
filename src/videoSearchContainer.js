import React, { Component } from 'react';
import VideoSearch from './components/videoSearch'
import axios from 'axios';
import YouTube from 'react-youtube';
import keys from './keys'

const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&type=video&videoDefinition=high&q=';

let query = ''

const youtubeKey = keys.REACT_APP_YOUTUBE


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

    response.then(function(response){
      self.setState({
        youtubeVideos: response.data.items

      });
    });
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
        }
    };
    let resultsyt;
		if (this.state.youtubeVideos) {
       resultsyt = this.state.youtubeVideos.map((video,index) =>
         <div>
           <YouTube
             videoId= {video.id.videoId}
             height= {opts.height}
             width= {opts.width}
             playerVars= { opts.playerVars}
           />
         </div>
       )
   }
   return (
     <div>
       <VideoSearch query={this.state.query}
         handleSubmit={(e) => {this.handleSubmit(e)}}
         handleChange={(e) => {this.handleChange(e)}}/>
         <br />
         <div> {resultsyt} </div>
       </div>
     )}
   }

   export default VideoSearchContainer;
