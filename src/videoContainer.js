import React, { Component } from 'react';
import Search from './Search'
import axios from 'axios';


const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&type=video&videoDefinition=high&q=';

let query = ''


const youtubeKey = '&key=AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY'


class VideoContainer extends Component {
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
		let resultyt;
		if (this.state.youtubeVideos.resultyt) {
       resultyt = this.state.youtubeVideos.resultyt.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
       this.setState({resultyt});


    }

		return (
			<div>

				<Search query={this.state.query}
						handleSubmit={(e) => {this.handleSubmit(e)}}
						handleChange={(e) => {this.handleChange(e)}}/>
				<br />
        {
          this.state.resultyt.map((link,i) => {
            // console.log(link);
            var frame =
             <div className='youtube' key={i}>
               <iframe  title="unique"width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
             </div>
             return frame
           })
         }
         {this.frame}
			</div>
		)
	}
}

export default VideoContainer;


// class Videos extends Component {
//   constructor (props) {
//     super(props);
//   this.state = {
//     resultyt: []
//   };
//   this.clicked = this.clicked.bind(this);
// }
// clicked(){
//   console.log('clicked');
// }
//   componentDidMount() {
//     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&q=fishing&type=video&videoDefinition=high&key=AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY`)
//       .then(res => {
//         // console.log(res.data);
//         const resultyt = res.data.items.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
//         this.setState({resultyt});
//       })
//   }
//
//   render() {
//     // console.log(this.state.resultyt);
//
//     return (
//       <div>
//         <form className='button'>
//
//         <button onClick={this.clicked}> Recipe Video</button>
//       </form>
//         {
//           this.state.resultyt.map((link,i) => {
//             // console.log(link);
//             var frame =
//              <div className='youtube' key={i}>
//                <iframe  title="unique"width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
//              </div>
//              return frame
//            })
//          }
//          {this.frame}
//
//
//
//     </div>
