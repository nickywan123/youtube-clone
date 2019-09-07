// class to render video UI

import React, { Component } from "react";
import VideoDetail from "./component/VideoDetail";
import VideosList from "./component/VideosList";

class VideoModule extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // return video items, video description and video list
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideosList
              videos={this.props.appState.videos}
              onVideoSelect={this.props.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoModule;
