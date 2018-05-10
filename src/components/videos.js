import React, { Component } from 'react';

import axios from 'axios';

class Videos extends Component {
  constructor (props) {
    super(props);
  this.state = {
    resultyt: []
  };
  this.clicked = this.clicked.bind(this);
}
clicked(){
  console.log('clicked');
}
  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high&key=AIzaSyDn2xub---lb7l87LvWXEX19XPGc_QK3DY`)
      .then(res => {
        // console.log(res.data);
        const resultyt = res.data.items.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
        this.setState({resultyt});
      })
  }

  render() {
    // console.log(this.state.resultyt);

    return (
      <div>
        <form className='button'>

        <button onClick={this.clicked}> Recipe Video</button>
      </form>
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

export default Videos;
