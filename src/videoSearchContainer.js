import React, { Component } from 'react';
import VideoSearch from './components/videoSearch'
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

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
        youtubeVideos: response.data
      });
    });
  }
  render() {
  //   let resultsyt;
  //   if (this.state.youtubeVideos.resultsyt) {
  //     resultsyt = this.state.youtubeVideos.resultsyt.map((item,index) =>
  //     <div>
  //       <h2>{item.id}</h2>
  //     </div>
  //   )
  // }
  return (
    <div>
      <VideoSearch query={this.state.query}
        handleSubmit={(e) => {this.handleSubmit(e)}}
        handleChange={(e) => {this.handleChange(e)}}/>
        <br />
        <div>
          <RaisedButton label="Default" />
          {/* {
            this.state.youtubeVideos.map((link,i) => {
              // console.log(link);
              var frame =
               <div className='youtube' key={i}>
                 <iframe  title="unique"width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
               </div>
               return frame ``
             })
           }
           {this.frame} */}

        </div>
      </div>
    )
  }
}
export default VideoSearchContainer;
