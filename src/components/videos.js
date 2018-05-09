import React from 'react';

import axios from 'axios';

class Videos extends React.Component {
  state = {
    resultyt: []
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
    console.log(this.state.resultyt);

    return (
      <div>
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
