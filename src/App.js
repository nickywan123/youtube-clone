import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./component/SearchBar";
import VideoModule from "./component/Videos/VideoModule";
import youtube, { baseParams } from "./api/youtube.js";

class App extends Component {
  //* App state
  state = {
    videos: [],
    selectedVideo: null
  };

  //* Set default search term
  componentDidMount() {
    this.onTermSubmit("sekiro");
  }

  //* User enters a search term
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  //[(Callback)] User selected video
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoModule appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
